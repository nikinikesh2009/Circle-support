'use client'

import { usePathname, useRouter } from 'next/navigation'
import { languages, type Locale } from '@/i18n-config'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    // newPath will be /<new_locale>/ or /<new_locale>/<path>
    const newPath = `/${newLocale}${pathname.substring(3)}`
    router.replace(newPath)
  }

  return (
    <div className="language-switcher">
      <select
        onChange={handleLanguageChange}
        value={locale}
        className="px-3 py-2 rounded-lg bg-white/20 text-white border-none text-sm cursor-pointer focus:outline-none backdrop-blur-sm"
        aria-label="Language selector"
      >
        {languages.map(({ code, name, flag }) => (
          <option key={code} value={code}>
            {flag} {name}
          </option>
        ))}
      </select>
    </div>
  )
}