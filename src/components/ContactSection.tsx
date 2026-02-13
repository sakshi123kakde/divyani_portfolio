import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".reveal"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center reveal">
          Let's <span className="pastel-gradient-text">Connect</span>
        </h2>
        <p className="reveal font-body text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="reveal flex flex-col gap-6">
            <a href="mailto:karwaldivyani@gmail.com" className="glass-card p-6 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-pastel-rose/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="font-body text-sm font-medium text-foreground">karwaldivyani@gmail.com</p>
              </div>
            </a>
            <a href="tel:7020127701" className="glass-card p-6 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-pastel-mint/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <p className="font-body text-sm font-medium text-foreground">7020127701</p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form className="reveal glass-card p-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <div className="w-24 h-1 mx-auto pastel-gradient rounded-full mb-6" />
        <p className="font-body text-sm text-muted-foreground">
          © 2024 Divyani Karwal. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
