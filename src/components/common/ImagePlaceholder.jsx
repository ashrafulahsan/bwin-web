export function ImagePlaceholder({ label = 'Image', style }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f2f1ef',
        color: '#6e6c66',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-caption)',
        textAlign: 'center',
        padding: 8,
        ...style,
      }}
    >
      {label}
    </div>
  );
}
