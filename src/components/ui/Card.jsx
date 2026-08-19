'use client';

export function Card({ children, padding = 20, hover = false, style }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow var(--duration-md) var(--ease-standard)',
        ...style,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
