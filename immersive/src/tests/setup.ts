import '@testing-library/jest-dom';

if (typeof window !== 'undefined') {
  // Node 26 experimental localStorage on globalThis can be undefined without --localstorage-file
  // Ensure globalThis.localStorage delegates to jsdom window.localStorage
  if (!globalThis.localStorage || typeof globalThis.localStorage.getItem !== 'function') {
    Object.defineProperty(globalThis, 'localStorage', {
      value: window.localStorage,
      writable: true,
      configurable: true,
    });
  }
}

