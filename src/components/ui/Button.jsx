'use client';

const sizes = {
  sm: { padding: '6px 12px', fontSize: 'var(--fs-body-sm)', gap: 6, radius: 'var(--radius-sm)' },
  md: { padding: '9px 16px', fontSize: 'var(--fs-body-md)', gap: 8, radius: 'var(--radius-md)' },
  lg: { padding: '12px 22px', fontSize: 'var(--fs-body-lg)', gap: 8, radius: 'var(--radius-md)' },
};

const variants = {
  primary: { background: 'var(--surface-brand)', color: 'var(--text-inverse)', border: '1px solid var(--surface-brand)' },
  accent: { background: 'var(--surface-accent)', color: 'var(--white)', border: '1px solid var(--surface-accent)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--text-primary)', border: '1px solid transparent' },
  danger: { background: 'var(--state-error)', color: 'var(--white)', border: '1px solid var(--state-error)' },
};

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const s = sizes[size];
  const v = variants[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-medium)',
        borderRadius: s.radius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition:
          'background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)',
        whiteSpace: 'nowrap',
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--surface-brand-hover)';
        else if (variant === 'accent') e.currentTarget.style.background = 'var(--surface-accent-hover)';
        else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-sunken)';
        else if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sunken)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = v.background;
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
