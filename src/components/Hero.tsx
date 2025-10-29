import spaHero from "@/assets/spa-hero-new.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={spaHero} 
          alt="Luxury massage table with warm pink walls and spa amenities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-2 md:mb-3 tracking-tight">
          {t.title}
        </h1>
        <p className="font-serif text-lg md:text-3xl text-white/90">
          {t.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
