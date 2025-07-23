import React from "react";
import { Linkedin, Instagram, Twitter, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "8eb4c7a1-5460-4614-9591-034b0616617f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
        <div className="max-w-xl mx-auto bg-background/80 rounded-xl shadow-lg p-8">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
            ></textarea>
            <button
              type="submit"
              className="btn-primary px-8 py-3 rounded-lg font-orbitron font-bold text-lg shadow hover:scale-105 transition-all cursor-target"
            >
              Submit Form
            </button>
          </form>
          <span className="block mt-4 text-center text-primary font-semibold min-h-[1.5em]">{result}</span>
        </div>
        
        <div className="flex justify-center mt-8 mb-2">
          <a
            href="https://chat.whatsapp.com/DSDffqnNRtRDTRHgCNfwJi?mode=r_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-black gap-2 px-6 py-3 rounded-lg bg-secondary font-orbitron font-bold shadow hover:bg-secondary/90 transition-all text-base"
          >
            <img src="https://images.seeklogo.com/logo-png/16/2/whatsapp-logo-png_seeklogo-168310.png" className="w-6" />
            Join our WhatsApp Community
          </a>
        </div>
      </div>
    </section>
  );
}