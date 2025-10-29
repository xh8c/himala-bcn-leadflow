import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          Himala
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          © {new Date().getFullYear()} Himala. {t.rights}
        </p>
        <p className="text-xs text-muted-foreground mb-6">
          {t.description}
        </p>
        
        {/* Language Toggle */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded transition-colors ${
              language === "en"
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            English
          </button>
          <span className="text-muted-foreground">|</span>
          <button
            onClick={() => setLanguage("es")}
            className={`px-3 py-1 rounded transition-colors ${
              language === "es"
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Español
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
