import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const testimonials = [
  {
    name: "Roselyn Sanvictores",
    text: "Súper nice & cozy massage place a few steps of Sagrada Familia. Cherish has wonderful hands. I got the Bali massage and feel brand new!",
    rating: 5,
  },
  {
    name: "Josie Lee",
    text: "It's proven that Cherish is one of the best massage I have in BCN. She is professional, hardworking and great massage. I have become a regular customer. Thanks.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="font-semibold text-foreground">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://www.google.com/search?sca_esv=6b0b75a31f80727a&rlz=1C1PNPB_enIN1138IN1138&sxsrf=AE3TifN-hKHeV5fSy0U2p4VVgL8Yi5YycA:1761657852720&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExGJKPJIQyYWWDtBb14nrNBYjMmreIYYW__TMx5JnMqEJKfe9NOub_Xhe9CALjrJxhLzpfARv0Pn5iHSdevDsnwm6ih7LLDg6Syg7Q-z48w62wvsTg%3D%3D&q=Himala+%E2%80%A2+Centro+de+Masajes+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-[1.02]"
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
