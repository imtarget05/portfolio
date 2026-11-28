import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, Ring, Torus, Group } from '@react-three/drei';

export interface SimulationNode {
  id: string;
  label: string;
  type: 'client' | 'api' | 'db' | 'cache' | 'queue' | 'worker';
  position: [number, number, number];
  color: string;
  active: boolean;
  pulse: number;
}

export interface SimulationEdge {
  from: string;
  to: string;
  label?: string;
  active: boolean;
}

const NODE_COLORS: Record<string, string> = {
  client: '#22d3ee',
  api: '#3b82f6',
  db: '#ef4444',
  cache: '#a855f7',
  queue: '#f59e0b',
  worker: '#10b981',
};

function Node({ node }: { node: SimulationNode }) {
  const ref = useRef<Group>(null);
  const { viewport } = useThree();
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (node.active) {
      const id = setInterval(() => {
        setPulse((p) => (p + 1) % 100);
      }, 50);
      return () => clearInterval(id);
    }
  }, [node.active]);

  const scale = 1 + (pulse / 100) * 0.3;

  let geometry;
  switch (node.type) {
    case 'client':
      geometry = <Sphere args={[0.6, 32, 32]} />;
      break;
    case 'api':
      geometry = <Box args={[1, 1, 1]} />;
      break;
    case 'db':
      geometry = <Cylinder args={[0.8, 0.8, 0.4, 32]} />;
      break;
    case 'cache':
      geometry = <Ring args={[0.4, 0.8, 32]} />;
      break;
    case 'queue':
      geometry = <Torus args={[0.5, 0.2, 16, 100]} />;
      break;
    case 'worker':
      geometry = <Box args={[0.7, 0.7, 0.7]} />;
      break;
    default:
      geometry = <Sphere args={[0.5, 32, 32]} />;
  }

  return (
    <group ref={ref} position={node.position} scale={scale}>
      <mesh>
        {geometry}
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={node.active ? 0.5 : 0} />
      </mesh>
      <text
        anchor="center"
        fontSize={0.4}
        position={[0, 1.2, 0]}
        color="#ffffff"
      >
        {node.label}
      </text>
    </group>
  );
}

function Cylinder({ args }: { args: number[] }) {
  return <primitive object={new THREE.CylinderGeometry(...args)} />;
}

function Edge({ edge }: { edge: SimulationEdge }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (edge.active) {
      const id = setInterval(() => {
        setProgress((p) => (p + 1) % 100);
      }, 80);
      return () => clearInterval(id);
    }
  }, [edge.active]);

  return (
    <line
      start={[0, 0, 0]}
      end={[1, 0, 0]}
      color={edge.active ? '#22d3ee' : '#64748b'}
      linewidth={edge.active ? 3 : 1}
      dashed={!edge.active}
    />
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
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <edges>
            {edges.map((edge, i) => (
              <group key={i}>
                <Edge edge={edge} />
              </group>
            ))}
          </edges>
          {nodes.map((node, i) => (
            <Node key={i} node={node} active={activeNode === node.id || !activeNode} />
          ))}
        </Canvas>
      </div>
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
