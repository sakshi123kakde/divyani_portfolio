import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll(".reveal");
    els.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-pastel-blue/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title reveal">
          About <span className="pastel-gradient-text">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
              Experienced executive leader with a successful track record in strategic planning, team management, and business development. Strong communication and interpersonal skills with the ability to build and maintain relationships with stakeholders at all levels.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              With a foundation in science and specialized training in multimedia & animation, I blend analytical thinking with artistic creativity to bring ideas to life through visuals and storytelling.
            </p>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Software Tools", value: "8+" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
