'use client';

import { createContext, useContext, ReactNode } from 'react';
import get from 'lodash/get';
import { type LocaleStrings } from '@/lib/locale';

type TranslationContextType = {
  dictionary: LocaleStrings;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({
  dictionary,
  children,
}: {
  dictionary: LocaleStrings;
  children: ReactNode;
}) {

  const t = (key: string): string => {
    const value = get(dictionary, key);
    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ dictionary, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
