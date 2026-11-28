import { SimulationContainer, SimulationNode, SimulationEdge } from './SimulationContainer';

export function FlashSaleSimulation() {
  const nodes: SimulationNode[] = [
    { id: 'client', label: 'Client', type: 'client', position: { x: 100, y: 100 }, color: '#22d3ee', active: true },
    { id: 'api', label: 'Spring Boot API', type: 'api', position: { x: 300, y: 100 }, color: '#3b82f6', active: true },
    { id: 'lock', label: 'Redis Lock', type: 'cache', position: { x: 500, y: 100 }, color: '#a855f7', active: true },
    { id: 'db', label: 'PostgreSQL', type: 'db', position: { x: 300, y: 300 }, color: '#ef4444', active: true },
    { id: 'outbox', label: 'Outbox Table', type: 'db', position: { x: 150, y: 300 }, color: '#ef4444', active: false },
    { id: 'relay', label: 'Relay Worker', type: 'worker', position: { x: 450, y: 300 }, color: '#10b981', active: false },
    { id: 'mq', label: 'RabbitMQ', type: 'queue', position: { x: 600, y: 300 }, color: '#f59e0b', active: false },
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
