'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('bwin-theme', theme);
    } catch (e) {
      // localStorage unavailable (private mode, disabled storage) — theme still applies for this session
    }
  }, [theme]);

  return [theme, setTheme];
}
