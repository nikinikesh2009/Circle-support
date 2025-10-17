'use client';

declare global {
  interface Window {
    google: any;
    doGTranslate: (lang: string | HTMLSelectElement) => void;
  }
}

export function LanguageSwitcher() {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.doGTranslate(e.target.value);
  }

  return (
    <div className="language-switcher">
      <select 
        onChange={handleLanguageChange} 
        className="px-3 py-2 rounded-lg bg-white/20 text-white border-none text-sm cursor-pointer focus:outline-none backdrop-blur-sm"
      >
        <option value="en|en">🇺🇸 English</option>
        <option value="en|si">🇱🇰 Sinhala</option>
        <option value="en|ta">🇱🇰 Tamil</option>
        <option value="en|zh-CN">🇨🇳 Chinese</option>
        <option value="en|hi">🇮🇳 Hindi</option>
        <option value="en|ko">🇰🇷 Korean</option>
        <option value="en|tl">🇵🇭 Tagalog</option>
        <option value="en|id">🇮🇩 Indonesian</option>
        <option value="en|es">🇪🇸 Spanish</option>
        <option value="en|fr">🇫🇷 French</option>
        <option value="en|de">🇩🇪 German</option>
        <option value="en|ja">🇯🇵 Japanese</option>
        <option value="en|ru">🇷🇺 Russian</option>
      </select>
    </div>
  );
}
