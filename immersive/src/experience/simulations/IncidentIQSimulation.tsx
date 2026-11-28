import { SimulationContainer, SimulationNode, SimulationEdge } from './SimulationContainer';

export function IncidentIQSimulation() {
  const nodes: SimulationNode[] = [
    { id: 'user', label: 'User', type: 'client', position: { x: 100, y: 100 }, color: '#22d3ee', active: true },
    { id: 'api', label: 'Workers API', type: 'api', position: { x: 300, y: 100 }, color: '#3b82f6', active: true },
    { id: 'embed', label: 'Workers AI Embed', type: 'worker', position: { x: 450, y: 100 }, color: '#10b981', active: false },
    { id: 'vec', label: 'Vectorize Index', type: 'db', position: { x: 600, y: 100 }, color: '#ef4444', active: false },
    { id: 'rag', label: 'RAG Retrieval', type: 'worker', position: { x: 600, y: 300 }, color: '#10b981', active: false },
    { id: 'langgraph', label: 'LangGraph Workflow', type: 'api', position: { x: 450, y: 300 }, color: '#3b82f6', active: false },
    { id: 'response', label: 'AI Response', type: 'client', position: { x: 300, y: 300 }, color: '#22d3ee', active: false },
  ];

  const edges: SimulationEdge[] = [
    { from: 'user', to: 'api', label: 'INCIDENT', active: true },
    { from: 'api', to: 'embed', label: 'EMBED', active: false },
    { from: 'embed', to: 'vec', label: 'QUERY', active: false },
    { from: 'vec', to: 'rag', label: 'RETRIEVE', active: false },
    { from: 'rag', to: 'langgraph', label: 'CONTEXT', active: false },
    { from: 'langgraph', to: 'response', label: 'GENERATE', active: false },
    { from: 'response', to: 'user', label: 'REPLY', active: false },
  ];

  return (
    <SimulationContainer
      nodes={nodes}
      edges={edges}
      title="IncidentIQ — AI-Powered Incident Triage"
    />
  );
}
