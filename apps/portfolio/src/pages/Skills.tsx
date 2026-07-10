import { Section, TechChip } from "ui";
import { profile } from "../data/profile";

export default function Skills() {
  const skills = [
    "Kotlin",
    "Jetpack Compose",
    "MVVM",
    "Clean Architecture",
    "Firebase",
    "REST APIs",
    "Python",
    "Ethical Hacking",
    "Cybersecurity",
    "Claude API",
    "TFLite",
    "On-Device ML",
    "React",
    "Flutter",
    "Dart",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  return (
    <Section id="skills" label="Tech Stack" title="Skills & Technologies">
      <p className="mb-6 text-secondary-100">
        Technologies and concepts I work with regularly.
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <TechChip key={s} label={s} />
        ))}
      </div>
    </Section>
  );
}
