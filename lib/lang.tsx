'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import T, { type Lang } from './translations';

type Translations = typeof T['en'];

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: Translations;
}

const Ctx = createContext<LangCtx>({ lang: 'en', toggle: () => {}, t: T.en });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'en' || stored === 'es') setLang(stored);
  }, []);

  const toggle = () => {
    const next: Lang = lang === 'en' ? 'es' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  const translations = T[lang];

  return (
    <Ctx.Provider value={{ lang, toggle, t: translations }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
