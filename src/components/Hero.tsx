import spaHero from "@/assets/spa-hero.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={spaHero} 
          alt="Luxury spa interior with candles and warm ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
          Himala BCN
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-muted-foreground mb-4 italic">
          Calm & Shine
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
          Experience the art of relaxation in the heart of Barcelona. 
          Premium treatments designed to restore your inner balance.
        </p>
        <button
          onClick={scrollToForm}
          className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Claim My 15% Off & Book My Spot</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
