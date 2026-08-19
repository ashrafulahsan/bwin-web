'use client';

import { useState } from 'react';

export function Tooltip({ label, children }) {
  const [show, setShow] = useState(false);
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 6px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--navy-800)',
            color: 'var(--white)',
            fontSize: 'var(--fs-caption)',
            fontFamily: 'var(--font-body)',
            padding: '5px 9px',
            borderRadius: 'var(--radius-sm)',
            whiteSpace: 'nowrap',
            boxShadow: 'var(--shadow-md)',
            zIndex: 10,
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
