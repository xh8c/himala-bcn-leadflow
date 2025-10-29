import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "es") {
      return saved;
    }
    
    // Auto-detect based on timezone or navigator language
    const userLanguage = navigator.language.toLowerCase();
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // If timezone is in Spain or language is Spanish, default to Spanish
    if (userTimezone.includes("Madrid") || userTimezone.includes("Barcelona") || 
        userLanguage.startsWith("es")) {
      return "es";
    }
    
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
