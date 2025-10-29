import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero />
        <BookingForm />
        <Testimonials />
        <Location />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
