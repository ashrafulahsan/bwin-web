'use client';

export function Sidebar({ items = [], activeKey, onSelect, logo, style }) {
  return (
    <nav
      style={{
        width: 232,
        background: 'var(--navy-800)',
        color: 'var(--white)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 12px',
        fontFamily: 'var(--font-body)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {logo && <div style={{ padding: '0 8px 20px' }}>{logo}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => onSelect && onSelect(it.key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 10px',
              borderRadius: 'var(--radius-sm)',
              background: it.key === activeKey ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: it.key === activeKey ? 'var(--white)' : 'rgba(255,255,255,0.7)',
              fontSize: 'var(--fs-body-md)',
              fontWeight: it.key === activeKey ? 'var(--fw-medium)' : 'var(--fw-regular)',
              textAlign: 'left',
              width: '100%',
            }}
          >
            {it.icon}
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
