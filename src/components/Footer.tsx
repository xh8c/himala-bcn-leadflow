const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          Himala BCN
        </h3>
        <p className="text-muted-foreground mb-6 italic">
          Calm & Shine
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Himala BCN. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Premium spa treatments in the heart of Barcelona
        </p>
      </div>
    </footer>
  );
};

export default Footer;
