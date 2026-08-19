'use client';

const tones = {
  info: { border: 'var(--navy-500)', icon: 'information-circle', color: 'var(--navy-700)' },
  success: { border: 'var(--state-success)', icon: 'check-circle', color: 'var(--green-700)' },
  warning: { border: 'var(--state-warning)', icon: 'exclamation-triangle', color: 'var(--amber-700)' },
  error: { border: 'var(--state-error)', icon: 'x-circle', color: 'var(--red-700)' },
};

export function Toast({ tone = 'info', title, description, onClose, style }) {
  const t = tones[tone];
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        padding: '12px 14px',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        borderLeft: `3px solid ${t.border}`,
        boxShadow: 'var(--shadow-lg)',
        fontFamily: 'var(--font-body)',
        minWidth: 280,
        maxWidth: 360,
        ...style,
      }}
    >
      <img
        src={`https://cdn.jsdelivr.net/npm/heroicons@2.1.5/24/outline/${t.icon}.svg`}
        width={20}
        height={20}
        style={{ flexShrink: 0, marginTop: 1 }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 'var(--fs-body-md)', fontWeight: 'var(--fw-medium)', color: 'var(--text-primary)' }}>
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>
            {description}
          </div>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Dismiss"
          style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 14, padding: 0 }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
