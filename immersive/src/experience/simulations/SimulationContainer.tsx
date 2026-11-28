import { useState } from 'react';

export interface SimulationNode {
  id: string;
  label: string;
  type: 'client' | 'api' | 'db' | 'cache' | 'queue' | 'worker';
  position: { x: number; y: number };
  color: string;
  active: boolean;
}

export interface SimulationEdge {
  from: string;
  to: string;
  label?: string;
  active: boolean;
}

const TYPE_CONFIG: Record<string, { icon: string; bg: string }> = {
  client: { icon: '👤', bg: '#22d3ee' },
  api: { icon: '🔌', bg: '#3b82f6' },
  db: { icon: '🗄️', bg: '#ef4444' },
  cache: { icon: '⚡', bg: '#a855f7' },
  queue: { icon: '📬', bg: '#f59e0b' },
  worker: { icon: '⚙️', bg: '#10b981' },
};

function Node({ node, active }: { node: SimulationNode; active: boolean }) {
  const config = TYPE_CONFIG[node.type];
  return (
    <div
      className={`absolute flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-300 ${
        active
          ? `bg-${config.bg}/20 text-${config.bg.replace('#', '')} border-${config.bg.replace('#', '')}/50 shadow-[0_0_20px_${config.bg}40]`
          : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:text-white hover:border-slate-600'
      }`}
      style={{
        left: node.position.x,
        top: node.position.y,
      }}
    >
      <div className="text-2xl mb-1">{config.icon}</div>
      <span className="text-xs font-medium text-center leading-none px-2 py-0.5 bg-black/60 rounded backdrop-blur-sm whitespace-nowrap">
        {node.label}
      </span>
    </div>
  );
}

function Edge({ edge, nodes }: { edge: SimulationEdge; nodes: SimulationNode[] }) {
  const fromNode = nodes.find((n) => n.id === edge.from);
  const toNode = nodes.find((n) => n.id === edge.to);
  if (!fromNode || !toNode) return null;

  const dx = toNode.position.x - fromNode.position.x;
  const dy = toNode.position.y - fromNode.position.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden`}
      style={{
        left: fromNode.position.x + 8,
        top: fromNode.position.y + 8,
        width: length,
        height: 2,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 0',
      }}
    >
      <div
        className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2"
        style={{
          background: edge.active ? '#22d3ee' : '#64748b',
          opacity: edge.active ? 1 : 0.4,
        }}
      />
      {edge.active && (
        <div
          className="absolute top-1/2 left-0 w-2 h-2 rounded-full transform -translate-y-1/2"
          style={{
            background: '#22d3ee',
            boxShadow: '0 0 8px #22d3ee',
            animation: 'pulse 2s infinite',
          }}
        />
      )}
    </div>
  );
}

export function SimulationContainer({
  nodes,
  edges,
  title,
}: {
  nodes: SimulationNode[];
  edges: SimulationEdge[];
  title: string;
}) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-black rounded-lg overflow-hidden border border-slate-800">
      <svg
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: edges
            .map(
              (edge) => `
            <line
              x1="${nodes.find((n) => n.id === edge.from)?.position.x ?? 0 + 8}"
              y1="${nodes.find((n) => n.id === edge.from)?.position.y ?? 0 + 8}"
              x2="${nodes.find((n) => n.id === edge.to)?.position.x ?? 0 + 8}"
              y2="${nodes.find((n) => n.id === edge.to)?.position.y ?? 0 + 8}"
              stroke="${edge.active ? '#22d3ee' : '#64748b'}"
              stroke-width="${edge.active ? 3 : 1}"
              stroke-dasharray="${!edge.active ? '4,4' : '0'}"
              opacity="${edge.active ? 1 : 0.4}"
            />
          `
            )
            .join(''),
        }}
      />
      {edges.map((edge) => (
        <Edge key={`${edge.from}-${edge.to}`} edge={edge} nodes={nodes} />
      ))}
      {nodes.map((node) => (
        <Node key={node.id} node={node} active={activeNode === node.id || !activeNode} />
      ))}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-slate-300 overflow-x-auto pb-2">
          {nodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                activeNode === node.id
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:border-slate-600 border border-slate-700/50'
              }`}
            >
              {node.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
