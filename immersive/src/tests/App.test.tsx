import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { App } from '@/App';

vi.mock('framer-motion', () => {
  const MockMotion = ({ children }: { children: ReactNode }) => <div data-mock-motion>{children}</div>;
  return {
    useScroll: vi.fn(() => ({ scrollYProgress: { get: () => 0 } })),
    useSpring: vi.fn((v: any) => v),
    useTransform: vi.fn(() => 0),
    motion: {
      div: MockMotion,
      h1: MockMotion,
      p: MockMotion,
      span: MockMotion,
    } as any,
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
  };
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Digital Experiences/)).toBeInTheDocument();
  });
});
