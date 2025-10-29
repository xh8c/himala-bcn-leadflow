import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Visit Us in Barcelona
        </h2>
        
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Carrer de Lepant, 274<br />
                    L'Eixample, 08013 Barcelona<br />
                    Spain
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+34 633 57 59 36</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">himalabcn@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Opening Hours</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <a
            href="https://maps.app.goo.gl/jx6hfupTPz5D6Zfp6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-[1.02]"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
