import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
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
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section ref={ref} className="section-padding bg-pastel-yellow/15">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title reveal">
          <span className="pastel-gradient-text">Education</span>
        </h2>
        <div className="reveal glass-card p-10 max-w-lg mx-auto hover:shadow-xl transition-shadow duration-500">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pastel-yellow/40 flex items-center justify-center">
            <span className="font-display text-2xl">🎓</span>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground">Multimedia Animation</h3>
          <p className="font-body text-muted-foreground mt-2">2023 – 2024</p>
          <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
            Specialized training in multimedia & animation, blending analytical thinking with artistic creativity to bring ideas to life through visuals and storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
