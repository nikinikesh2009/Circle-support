export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'si', 'ta', 'zh-CN', 'hi', 'ko', 'tl', 'id', 'es', 'fr', 'de', 'ja', 'ru'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const languages: { name: string; code: Locale; flag: string }[] = [
    { name: 'English', code: 'en', flag: '🇺🇸' },
    { name: 'Sinhala', code: 'si', flag: '🇱🇰' },
    { name: 'Tamil', code: 'ta', flag: '🇱🇰' },
    { name: 'Chinese', code: 'zh-CN', flag: '🇨🇳' },
    { name: 'Hindi', code: 'hi', flag: '🇮🇳' },
    { name: 'Korean', code: 'ko', flag: '🇰🇷' },
    { name: 'Tagalog', code: 'tl', flag: '🇵🇭' },
    { name: 'Indonesian', code: 'id', flag: '🇮🇩' },
    { name: 'Spanish', code: 'es', flag: '🇪🇸' },
    { name: 'French', code: 'fr', flag: '🇫🇷' },
    { name: 'German', code: 'de', flag: '🇩🇪' },
    { name: 'Japanese', code: 'ja', flag: '🇯🇵' },