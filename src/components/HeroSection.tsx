import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";

const typewriterTexts = [
  "Crafting Visual Stories",
  "Designing Digital Experiences",
  "Bringing Ideas to Life",
  "Motion Graphics & Beyond",
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typewriterTexts[textIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    if (titleRef.current) {
      tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
    }
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70 " />
      </div>

      {/* Floating pastel shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-pastel-rose/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-pastel-mint/30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-pastel-yellow/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-4xl">
          <p className="font-body text-sm uppercase tracking-[0.3em]  mb-4">
            Multimedia Animator & Graphic Designer
          </p>
          <h1 ref={titleRef} className="section-title text-5xl md:text-7xl lg:text-8xl leading-tight">
            Divyani<br />
            <span className="pastel-gradient-text">Karwal</span>
          </h1>
          <div ref={subtitleRef} className="mt-6 h-10">
            <p className="font-body text-xl md:text-2xl">
              <span>{currentText}</span>
              <span className="typewriter-cursor" />
            </p>
          </div>
          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToWork}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full border-2 border-primary text-foreground font-body font-medium text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-primary/50" />
      </div> */}
    </section>
  );
};

export default HeroSection;
