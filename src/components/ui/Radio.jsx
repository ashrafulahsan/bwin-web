'use client';

export function Radio({ label, checked, onChange, name, disabled, style }) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-md)',
        color: 'var(--text-primary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <input type="radio" checked={checked} onChange={onChange} name={name} disabled={disabled} style={{ display: 'none' }} />
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          border: `1px solid ${checked ? 'var(--surface-brand)' : 'var(--border-strong)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--surface-card)',
        }}
      >
        {checked && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--surface-brand)' }} />}
      </span>
      {label}
    </label>
  );
}
