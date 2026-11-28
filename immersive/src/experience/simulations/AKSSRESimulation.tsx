import { SimulationContainer, SimulationNode, SimulationEdge } from './SimulationContainer';

export function AKSSRESimulation() {
  const nodes: SimulationNode[] = [
    { id: 'git', label: 'Git Repo', type: 'client', position: { x: 100, y: 100 }, color: '#f59e0b', active: true },
    { id: 'argocd', label: 'Argo CD', type: 'api', position: { x: 300, y: 100 }, color: '#3b82f6', active: true },
    { id: 'aks', label: 'AKS Cluster', type: 'api', position: { x: 500, y: 100 }, color: '#3b82f6', active: true },
    { id: 'pod-blue', label: 'Pod Blue (v1)', type: 'worker', position: { x: 150, y: 300 }, color: '#10b981', active: true },
    { id: 'pod-green', label: 'Pod Green (v2)', type: 'worker', position: { x: 450, y: 300 }, color: '#10b981', active: false },
    { id: 'lb', label: 'Load Balancer', type: 'cache', position: { x: 600, y: 300 }, color: '#a855f7', active: true },
    { id: 'mon', label: 'Prometheus+Grafana', type: 'db', position: { x: 300, y: 450 }, color: '#ef4444', active: true },
  ];

  const edges: SimulationEdge[] = [
    { from: 'git', to: 'argocd', label: 'PUSH', active: true },
    { from: 'argocd', to: 'aks', label: 'SYNC', active: true },
    { from: 'aks', to: 'pod-blue', label: 'DEPLOY', active: true },
    { from: 'aks', to: 'pod-green', label: 'CANARY', active: false },
    { from: 'pod-blue', to: 'lb', label: 'TRAFFIC', active: true },
    { from: 'pod-green', to: 'lb', label: 'TRAFFIC', active: false },
    { from: 'aks', to: 'mon', label: 'METRICS', active: true },
  ];

  return (
    <SimulationContainer
      nodes={nodes}
      edges={edges}
      title="AKS-SRE — GitOps & Blue-Green Deployment"
    />
  );
}
