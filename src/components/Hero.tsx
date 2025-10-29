import spaHero from "@/assets/spa-hero-new.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Himala BCN
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-white/90 italic">
          Calm & Shine
        </p>
      </div>
    </section>
  );
};

export default Hero;
