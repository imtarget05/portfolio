import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GlassButton, NavCard } from '@/components/glass/GlassButton';
import { GlassNavbar } from '@/components/glass/GlassNavbar';
import { colors, easing } from '@/utils/colors';

describe('Design Tokens (colors & easing)', () => {
  it('defines required brand palette colors', () => {
    expect(colors.cyan).toBe('#22d3ee');
    expect(colors.violet).toBe('#8b5cf6');
    expect(colors.slate).toBe('#0f172a');
    expect(colors.white).toBe('#ffffff');
  });

  it('provides cubic bezier easing curves', () => {
    expect(easing.glass).toHaveLength(4);
    expect(easing.smooth).toHaveLength(4);
    expect(easing.bounce).toHaveLength(4);
  });
});

describe('GlassButton', () => {
  it('renders button with text and fires onClick', () => {
    const handleClick = vi.fn();
    render(<GlassButton onClick={handleClick}>Click Me</GlassButton>);

    const btn = screen.getByRole('button', { name: /Click Me/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('respects disabled attribute and does not fire onClick', () => {
    const handleClick = vi.fn();
    render(
      <GlassButton disabled onClick={handleClick}>
        Disabled Button
      </GlassButton>
    );

    const btn = screen.getByRole('button', { name: /Disabled Button/i });
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders asChild element when asChild is true', () => {
    render(
      <GlassButton asChild>
        <a href="#test-link">Link Inside</a>
      </GlassButton>
    );

    const link = screen.getByRole('link', { name: /Link Inside/i });
    expect(link).toHaveAttribute('href', '#test-link');
  });
});

describe('NavCard', () => {
  it('renders label and handles click', () => {
    const handleClick = vi.fn();
    render(<NavCard label="Chapter 1" active={false} onClick={handleClick} index={0} />);

    const card = screen.getByText('Chapter 1');
    expect(card).toBeInTheDocument();
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('GlassNavbar', () => {
  const chapters = [
    { id: 'ch-1', label: { en: 'Chapter 1', vi: 'Chương 1' } },
    { id: 'ch-2', label: { en: 'Chapter 2', vi: 'Chương 2' } },
  ];

  it('displays correct brand and chapter links for English', () => {
    const setLang = vi.fn();
    const setActiveIndex = vi.fn();

    render(
      <GlassNavbar
        lang="en"
        setLang={setLang}
        chapters={chapters}
        activeIndex={0}
        setActiveIndex={setActiveIndex}
      />
    );

    expect(screen.getByText('IMMERSIVE')).toBeInTheDocument();
    expect(screen.getByText('Chapter 1')).toBeInTheDocument();
    expect(screen.getByText('Chapter 2')).toBeInTheDocument();
  });

  it('displays correct brand and chapter links for Vietnamese', () => {
    const setLang = vi.fn();
    const setActiveIndex = vi.fn();

    render(
      <GlassNavbar
        lang="vi"
        setLang={setLang}
        chapters={chapters}
        activeIndex={1}
        setActiveIndex={setActiveIndex}
      />
    );

    expect(screen.getByText('MẢNG TRÌNH')).toBeInTheDocument();
    expect(screen.getByText('Chương 1')).toBeInTheDocument();
    expect(screen.getByText('Chương 2')).toBeInTheDocument();
  });

  it('triggers language toggle when language button is clicked', () => {
    const setLang = vi.fn();
    const setActiveIndex = vi.fn();

    render(
      <GlassNavbar
        lang="en"
        setLang={setLang}
        chapters={chapters}
        activeIndex={0}
        setActiveIndex={setActiveIndex}
      />
    );

    const langButtons = screen.getAllByLabelText('Toggle language');
    expect(langButtons.length).toBeGreaterThan(0);
    fireEvent.click(langButtons[0]);
    expect(setLang).toHaveBeenCalledWith('vi');
  });

  it('triggers setActiveIndex when chapter is clicked', () => {
    const setLang = vi.fn();
    const setActiveIndex = vi.fn();

    render(
      <GlassNavbar
        lang="en"
        setLang={setLang}
        chapters={chapters}
        activeIndex={0}
        setActiveIndex={setActiveIndex}
      />
    );

    fireEvent.click(screen.getByText('Chapter 2'));
    expect(setActiveIndex).toHaveBeenCalledWith(1);
  });
});
