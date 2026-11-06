export function useThreeFallback() {
  if (typeof window === 'undefined') return { webglAvailable: null, canvasRef: null };
  let available = false;
  try {
    const canvas = document.createElement('canvas');
    available = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    available = false;
  }
  return { webglAvailable: available, canvasRef: null };
}
