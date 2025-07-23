import { Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Timeline", href: "#" },
    { name: "Sponsors", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/geek-room-gtbit",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/geekroom_gtbit?igsh=end6aGIyMG1icmhv&utm_source=qr",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://x.com/geekroomgtbit?s=21",
      icon: Twitter,
    },
    {
      name: "WhatsApp",
      href: "https://chat.whatsapp.com/DSDffqnNRtRDTRHgCNfwJi?mode=r_t",
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch gap-12 md:gap-8">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start justify-center">
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
            <p className="text-muted-foreground mb-6 max-w-md text-center md:text-left">
              The premier student-led hackathon by Geek Room GTBIT. 
              Fostering innovation, collaboration, and community-building in tech.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center transition-all text-white hover:bg-primary/20 hover:text-white shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center md:items-start justify-center">
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground transition-all font-medium text-base hover:text-primary hover:underline hover:underline-offset-4 cursor-target"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Geek Room Logo - bigger, white background, vertically centered */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center md:items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-primary/10">
              <img
                src="https://www.geekroom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTransparent%20logo.4261b4ac.png&w=1080&q=75"
                alt="Geek Room Logo"
                className="w-24 h-24 object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © 2025 Hack Odyssey - All Rights Reserved
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ by Geek Room GTBIT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;