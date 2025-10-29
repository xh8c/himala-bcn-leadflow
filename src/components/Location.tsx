import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Location = () => {
  const { language } = useLanguage();
  const t = translations[language].location;

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          {t.title}
        </h2>
        
        <div className="bg-card rounded-2xl shadow-card p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 md:mb-2">{t.address}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Carrer de Lepant, 274<br />
                    L'Eixample, 08013 Barcelona<br />
                    Spain
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 md:mb-2">{t.phone}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">+34 633 57 59 36</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 md:mb-2">{t.email}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">himalabcn@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">{t.hours}</h3>
              <div className="space-y-2 text-muted-foreground text-xs md:text-sm">
                <div className="flex justify-between">
                  <span>{t.days.monday}</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.days.tuesday}</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.days.wednesday}</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.days.thursday}</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.days.friday}</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.days.saturday}</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.days.sunday}</span>
                  <span className="font-medium">{t.closed}</span>
                </div>
              </div>
            </div>
          </div>
          
          <a
            href="https://maps.app.goo.gl/jx6hfupTPz5D6Zfp6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-[1.02]"
          >
            <MapPin className="w-5 h-5 mr-2" />
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
