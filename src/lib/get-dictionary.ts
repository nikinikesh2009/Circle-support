import 'server-only'
import type { Locale } from '@/i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  de: () => import('@/locales/de.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
  fr: () => import('@/locales/fr.json').then((module) => module.default),
  hi: () => import('@/locales/hi.json').then((module) => module.default),
  id: () => import('@/locales/id.json').then((module) => module.default),
  ja: () => import('@/locales/ja.json').then((module) => module.default),
  ko: () => import('@/locales/ko.json').then((module) => module.default),
  ru: () => import('@/locales/ru.json').then((module) => module.default),
  si: () => import('@/locales/si.json').then((module) => module.default),
  ta: () => import('@/locales/ta.json').then((module) => module.default),
  tl: () => import('@/locales/tl.json').then((module) => module.default),
  'zh-CN': () => import('@/locales/zh-CN.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.