'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const Ctx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'dark',
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(stored ?? preferred);
  }, []);

  const apply = (t: Theme) => {
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  };

  return (
    <Ctx.Provider value={{ theme, toggle: () => apply(theme === 'dark' ? 'light' : 'dark') }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
