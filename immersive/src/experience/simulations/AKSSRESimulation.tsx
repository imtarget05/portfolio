import { SimulationContainer, SimulationNode, SimulationEdge } from './SimulationContainer';

export function AKSSRESimulation() {
  const nodes: SimulationNode[] = [
    { id: 'git', label: 'Git Repo', type: 'client', position: [-4, 2, 0], color: '#f59e0b', active: true, pulse: 0 },
    { id: 'argocd', label: 'Argo CD', type: 'api', position: [0, 2, 0], color: '#3b82f6', active: true, pulse: 0 },
    { id: 'aks', label: 'AKS Cluster', type: 'api', position: [4, 2, 0], color: '#3b82f6', active: true, pulse: 0 },
    { id: 'pod-blue', label: 'Pod Blue (v1)', type: 'worker', position: [-2, -2, 0], color: '#10b981', active: true, pulse: 0 },
    { id: 'pod-green', label: 'Pod Green (v2)', type: 'worker', position: [2, -2, 0], color: '#10b981', active: false, pulse: 0 },
    { id: 'lb', label: 'Load Balancer', type: 'cache', position: [4, -2, 0], color: '#a855f7', active: true, pulse: 0 },
    { id: 'mon', label: 'Prometheus+Grafana', type: 'db', position: [0, -4, 0], color: '#ef4444', active: true, pulse: 0 },
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
