import { SimulationContainer, SimulationNode, SimulationEdge } from './SimulationContainer';

export function FlashSaleSimulation() {
  const nodes: SimulationNode[] = [
    { id: 'client', label: 'Client', type: 'client', position: [-4, 2, 0], color: '#22d3ee', active: true, pulse: 0 },
    { id: 'api', label: 'Spring Boot API', type: 'api', position: [0, 2, 0], color: '#3b82f6', active: true, pulse: 0 },
    { id: 'lock', label: 'Redis Lock', type: 'cache', position: [2, 2, 0], color: '#a855f7', active: true, pulse: 0 },
    { id: 'db', label: 'PostgreSQL', type: 'db', position: [0, -2, 0], color: '#ef4444', active: true, pulse: 0 },
    { id: 'outbox', label: 'Outbox Table', type: 'db', position: [-2, -2, 0], color: '#ef4444', active: false, pulse: 0 },
    { id: 'relay', label: 'Relay Worker', type: 'worker', position: [2, -2, 0], color: '#10b981', active: false, pulse: 0 },
    { id: 'mq', label: 'RabbitMQ', type: 'queue', position: [4, -2, 0], color: '#f59e0b', active: false, pulse: 0 },
  ];

  const edges: SimulationEdge[] = [
    { from: 'client', to: 'api', label: 'HTTP', active: true },
    { from: 'api', to: 'lock', label: 'SETNX', active: true },
    { from: 'api', to: 'db', label: 'UPDATE inventory', active: true },
    { from: 'api', to: 'outbox', label: 'INSERT event', active: false },
    { from: 'outbox', to: 'relay', label: 'POLL', active: false },
    { from: 'relay', to: 'mq', label: 'PUBLISH', active: false },
    { from: 'mq', to: 'relay', label: 'CONSUME', active: false },
  ];

  return (
    <SimulationContainer
      nodes={nodes}
      edges={edges}
      title="FlashSale — Distributed Inventory Locking"
    />
  );
}
