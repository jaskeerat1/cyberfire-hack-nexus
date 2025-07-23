import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import "../index.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Organizers", href: "#organizers" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="top-0 z-30 w-full bg-background/80 backdrop-blur border-b border-border shadow-sm sticky">
      <nav className="max-w-6x  l mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-target">
          <img src="/lovable-uploads/logo-removebg-preview.png" alt="Hack Odyssey Logo" className="w-10 h-10 logo-transparent-bg" />
          <span className="font-orbitron font-bold text-xl text-secondary tracking-widest">Hack Odyssey</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className="font-medium text-muted-foreground cursor-target hover:text-primary transition-colors px-2 py-1 relative"
                  >
                    <span className="nav-underline-text">{link.name}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="btn-primary ml-4 px-6 py-2 text-base font-orbitron cursor-target" size="sm">
            Register
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-accent/30 transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-primary"></span>
          <span className="block w-6 h-0.5 bg-primary"></span>
          <span className="block w-6 h-0.5 bg-primary"></span>
        </button>
      </nav>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 border-b border-border shadow animate-in fade-in-0 zoom-in-95">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-primary transition-colors py-2 relative"
                onClick={() => setMobileOpen(false)}
              >
                <span className="nav-underline-text">{link.name}</span>
              </a>
            ))}
            <Button className="btn-primary mt-2 w-full font-orbitron cursor-target" size="sm">
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
