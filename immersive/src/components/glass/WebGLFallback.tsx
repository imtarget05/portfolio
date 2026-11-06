interface WebGLFallbackProps {
  onRetry?: () => void;
}

export function WebGLFallback({ onRetry }: WebGLFallbackProps) {
  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center text-slate-300">
      <div className="glass-panel rounded-2xl p-8 max-w-md w-full text-center border border-white/10">
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">WebGL not available</h3>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          Your browser or device does not support WebGL, which is required for the
          3D experience.
          {prefersReduced ? ' Reduced motion mode is also active.' : ''}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}

interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center ${className || ''}`}>
      <div className="flex flex-col items-center gap-4 text-slate-300">
        <div className="w-12 h-12 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin" />
        <span className="text-sm font-medium tracking-widest uppercase">Loading experience</span>
      </div>
    </div>
  );
}
