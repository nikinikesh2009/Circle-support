'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n, languages, type Locale } from '@/i18n-config'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const redirectedPathName = (newLocale: Locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    router.replace(redirectedPathName(newLocale));
  };

  return (
    <div className="language-switcher">
      <select
        onChange={handleLanguageChange}
        value={locale}
        className="px-3 py-2 rounded-lg bg-white/20 text-white border-none text-sm cursor-pointer focus:outline-none backdrop-blur-sm"
        aria-label="Language selector"
      >
        {languages.map(({code, name, flag}) => (
          <option key={code} value={code}>
            {flag} {name}
          </option>
        ))}
      </select>
    </div>
  );
}
