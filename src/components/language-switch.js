import { useTranslation } from 'react-i18next';
import '../ressources/i18n';

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    return (
    <div data-thq="thq-navbar-nav">        
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
        {/* Add more buttons for other languages */}
      </div>
    );
  }
  
  export default LanguageSwitcher;