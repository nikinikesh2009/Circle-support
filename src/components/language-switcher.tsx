'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function LanguageSwitcher() {

  const doGTranslate = (langPair: string) => {
    if (!langPair) return;
    const lang = langPair.split('|')[1];
    
    // Find the Google Translate dropdown
    const teCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;

    if (document.getElementById('google_translate_element') == null || !teCombo) {
      // If it's not ready, retry after a short delay
      setTimeout(() => { doGTranslate(langPair); }, 100);
    } else {
      teCombo.value = lang;
      // Dispatch a change event to trigger the translation
      const event = new Event('change');
      teCombo.dispatchEvent(event);
    }
  };

  useEffect(() => {
    // This function will be called by the Google Translate script
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,si,ta,zh-CN,hi,ko,tl,id,es,fr,de,ja,ru',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className="language-switcher">
      <select 
        onChange={(e) => doGTranslate(e.target.value)} 
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
