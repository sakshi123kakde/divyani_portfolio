import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Design",
    color: "pastel-rose",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD"],
  },
  {
    title: "Video & Motion",
    color: "pastel-mint",
    skills: ["Premiere Pro", "After Effects", "Motion Graphics", "Video Editing"],
  },
  {
    title: "Photography",
    color: "pastel-yellow",
    skills: ["Lightroom", "Photo Retouching", "Color Grading", "Composition"],
  },
  {
    title: "Other",
    color: "pastel-blue",
    skills: ["Brand Identity", "Social Media", "Content Planning", "Prototyping"],
  },
];

const colorMap: Record<string, string> = {
  "pastel-rose": "bg-pastel-rose/30 hover:bg-pastel-rose/50",
  "pastel-mint": "bg-pastel-mint/30 hover:bg-pastel-mint/50",
  "pastel-yellow": "bg-pastel-yellow/30 hover:bg-pastel-yellow/50",
  "pastel-blue": "bg-pastel-blue/30 hover:bg-pastel-blue/50",
};

const borderColorMap: Record<string, string> = {
  "pastel-rose": "border-pastel-rose",
  "pastel-mint": "border-pastel-mint",
  "pastel-yellow": "border-pastel-yellow",
  "pastel-blue": "border-pastel-blue",
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".skill-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: i * 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: card, start: "top 90%" },
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-pastel-pink/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">
          <span className="pastel-gradient-text">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`skill-card glass-card p-6 border-t-4 ${borderColorMap[cat.color]} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`skill-tag ${colorMap[cat.color]} text-foreground`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
