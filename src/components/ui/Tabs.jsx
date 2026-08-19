'use client';

export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)', ...style }}>
      {tabs.map((t) => (
        <button
          key={t.value}
          onClick={() => onChange && onChange(t.value)}
          style={{
            padding: '10px 14px',
            background: 'none',
            border: 'none',
            borderBottom: t.value === value ? '2px solid var(--surface-brand)' : '2px solid transparent',
            color: t.value === value ? 'var(--text-brand)' : 'var(--text-secondary)',
            fontWeight: t.value === value ? 'var(--fw-semibold)' : 'var(--fw-regular)',
            fontSize: 'var(--fs-body-md)',
            cursor: 'pointer',
            marginBottom: -1,
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
