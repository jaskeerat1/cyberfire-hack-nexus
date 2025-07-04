const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            About Hack Odyssey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Hack Odyssey is the premier student-led hackathon organized by Geek Room GTBIT, 
              designed to foster innovation, collaboration, and community-building among aspiring 
              developers and tech enthusiasts.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Our mission is to create an inclusive platform where creativity meets technology, 
              enabling participants to solve real-world problems while building meaningful 
              connections within the tech community.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Join us for 48 hours of intense coding, learning, and innovation as we push the 
              boundaries of what's possible in the digital realm.
            </p>
          </div>

          <div className="relative">
            <div className="card-cyber">
              <img 
                src="/lovable-uploads/97909518-c8b0-4fc9-ba8d-e58d024cbd5a.png" 
                alt="Hack Odyssey Logo" 
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-orbitron font-bold text-primary">48</span>
            </div>
            <h3 className="font-orbitron font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground">Non-stop coding</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-orbitron font-bold text-secondary">100+</span>
            </div>
            <h3 className="font-orbitron font-semibold text-foreground mb-2">Participants</h3>
            <p className="text-muted-foreground">Talented developers</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-orbitron font-bold text-accent">₹50K+</span>
            </div>
            <h3 className="font-orbitron font-semibold text-foreground mb-2">Prizes</h3>
            <p className="text-muted-foreground">Total prize pool</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-orbitron font-bold text-primary">10+</span>
            </div>
            <h3 className="font-orbitron font-semibold text-foreground mb-2">Mentors</h3>
            <p className="text-muted-foreground">Industry experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;