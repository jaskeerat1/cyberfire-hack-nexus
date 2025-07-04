const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Timeline", href: "#" },
    { name: "Sponsors", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Code of Conduct", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/97909518-c8b0-4fc9-ba8d-e58d024cbd5a.png" 
                alt="Hack Odyssey Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-orbitron font-bold text-primary">
                Hack Odyssey
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The premier student-led hackathon by Geek Room GTBIT. 
              Fostering innovation, collaboration, and community-building in tech.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary text-sm">gh</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary text-sm">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary text-sm">tw</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Hack Odyssey - All Rights Reserved
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ by Geek Room GTBIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;