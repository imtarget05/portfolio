import { SimulationContainer, SimulationNode, SimulationEdge } from './SimulationContainer';

export function IncidentIQSimulation() {
  const nodes: SimulationNode[] = [
    { id: 'user', label: 'User', type: 'client', position: [-4, 2, 0], color: '#22d3ee', active: true, pulse: 0 },
    { id: 'api', label: 'Workers API', type: 'api', position: [0, 2, 0], color: '#3b82f6', active: true, pulse: 0 },
    { id: 'embed', label: 'Workers AI Embed', type: 'worker', position: [2, 2, 0], color: '#10b981', active: false, pulse: 0 },
    { id: 'vec', label: 'Vectorize Index', type: 'db', position: [4, 2, 0], color: '#ef4444', active: false, pulse: 0 },
    { id: 'rag', label: 'RAG Retrieval', type: 'worker', position: [4, -2, 0], color: '#10b981', active: false, pulse: 0 },
    { id: 'langgraph', label: 'LangGraph Workflow', type: 'api', position: [2, -2, 0], color: '#3b82f6', active: false, pulse: 0 },
    { id: 'response', label: 'AI Response', type: 'client', position: [0, -2, 0], color: '#22d3ee', active: false, pulse: 0 },
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
