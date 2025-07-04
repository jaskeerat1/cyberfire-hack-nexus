import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Have questions about Hack Odyssey? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary">📧</span>
                </div>
                <div>
                  <h4 className="font-orbitron font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:collab.geekroom@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    collab.geekroom@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary">📱</span>
                </div>
                <div>
                  <h4 className="font-orbitron font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+919315842762" className="text-secondary hover:text-secondary/80 transition-colors">
                    +91 9315842762
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent">🏢</span>
                </div>
                <div>
                  <h4 className="font-orbitron font-semibold text-foreground mb-1">Organization</h4>
                  <p className="text-muted-foreground">Geek Room GTBIT</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-orbitron font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary">gh</span>
                </a>
                <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary">ig</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-cyber">
            <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-orbitron font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-orbitron font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-orbitron font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" className="btn-cyber w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;