
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { getAITranslation } from '@/app/actions';
import { defaultLocale, locale, type LocaleStrings } from '@/lib/locale';
import { get } from 'lodash';

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<LocaleStrings>(locale);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTranslations = async () => {
      if (language === 'en') {
        setTranslations(locale);
        return;
      }
      setIsLoading(true);
      try {
        const result = await getAITranslation(locale, language);
        if (result) {
          setTranslations(result as LocaleStrings);
        } else {
          // Fallback to default if translation fails
          setTranslations(locale);
        }
      } catch (error) {
        console.error('Failed to fetch translations:', error);
        setTranslations(locale);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, [language]);

  const t = useCallback((key: string, fallback?: string): string => {
    // Basic key-path navigation
    const result = get(translations, key, fallback || key);
    return result;
  }, [translations]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
