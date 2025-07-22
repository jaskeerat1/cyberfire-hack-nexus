import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[calc(100vh-4rem)] pt-16">
      {/* Background with cyberpunk gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* HUD-style corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary opacity-60"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary opacity-60"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary opacity-60"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary opacity-60"></div>
        
        {/* Floating lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Status text */}
        <div className="mb-8">
          <p className="text-sm font-orbitron text-secondary uppercase tracking-wide mb-2">
            INITIATING YOUR HACKING MISSION...
          </p>
          <div className="flex justify-center">
            <div className="w-64 h-1 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-primary mb-4">
          HACK ODYSSEY
        </h1>
        
        {/* Subtitle with orange accent */}
        <p className="text-xl md:text-2xl text-subheading mb-2">
          Premier Student-Led <span className="text-secondary font-bold">Hackathon</span>
        </p>
        <p className="text-lg md:text-xl text-muted-accessible mb-8 max-w-2xl mx-auto">
          Join the ultimate coding adventure where <span className="text-secondary font-semibold">innovation</span> meets collaboration. 
          Presented by Geek Room GTBIT.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-primary text-lg px-8 py-4">
            Register Now
          </Button>
          <Button size="lg" className="btn-secondary text-lg px-8 py-4">
            Learn More
          </Button>
        </div>

        {/* Event info */}
        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-accessible">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="font-orbitron text-secondary font-bold">48 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="font-orbitron">100+ Participants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-orbitron">₹50,000+ Prizes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;