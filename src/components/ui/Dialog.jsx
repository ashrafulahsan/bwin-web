'use client';

export function Dialog({ open, title, children, onClose, footer }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(10,25,47,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface-card)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          width: 420,
          maxWidth: '90vw',
          fontFamily: 'var(--font-body)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '18px 20px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--fw-semibold)',
              fontSize: 'var(--fs-heading-sm)',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 16 }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 20, fontSize: 'var(--fs-body-md)', color: 'var(--text-secondary)' }}>{children}</div>
        {footer && (
          <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
