import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Graphic Designer & Video Editor",
    company: "Pimpode Brothers Entertainment Company",
    duration: "2 years",
    points: [
      "Designed promotional graphics, posters, and digital content for entertainment projects.",
      "Edited videos including trailers, ads, and short films to enhance storytelling and brand identity.",
      "Collaborated with teams to deliver engaging multimedia content under strict deadlines.",
    ],
  },
  {
    role: "Multimedia Designer",
    company: "Creative Agency",
    duration: "9 months",
    points: [
      "Created digital campaigns, motion graphics, and social media visuals tailored to brand requirements.",
      "Produced and edited video content to increase audience reach and engagement.",
      "Assisted in content planning, ensuring consistent brand identity across all media platforms.",
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".exp-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">
          <span className="pastel-gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-card relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 mt-8" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card p-8 hover:shadow-xl transition-shadow duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-pastel-rose/30 font-body text-xs font-medium text-foreground mb-3">
                      {exp.duration}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1 mb-4">{exp.company}</p>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((point, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
