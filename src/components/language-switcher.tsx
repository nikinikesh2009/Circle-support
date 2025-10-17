'use client';

import { useTranslation } from '@/context/translation-context';

export function LanguageSwitcher() {
  const { setLanguage, isLoading } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <select
        onChange={handleLanguageChange}
        className="px-3 py-2 rounded-lg bg-white/20 text-white border-none text-sm cursor-pointer focus:outline-none backdrop-blur-sm"
        aria-label="Language selector"
        disabled={isLoading}
      >
        <option value="en">🇺🇸 English</option>
        <option value="si">🇱🇰 Sinhala</option>
        <option value="ta">🇱🇰 Tamil</option>
        <option value="zh-CN">🇨🇳 Chinese</option>
        <option value="hi">🇮🇳 Hindi</option>
        <option value="ko">🇰🇷 Korean</option>
        <option value="tl">🇵🇭 Tagalog</option>
        <option value="id">🇮🇩 Indonesian</option>
        <option value="es">🇪🇸 Spanish</option>
        <option value="fr">🇫🇷 French</option>
        <option value="de">🇩🇪 German</option>
        <option value="ja">🇯🇵 Japanese</option>
        <option value="ru">🇷🇺 Russian</option>
      </select>
    </div>
  );
}
