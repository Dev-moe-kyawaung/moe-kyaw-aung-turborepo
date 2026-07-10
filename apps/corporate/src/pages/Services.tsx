import { Section, AppCardList } from "ui";

export default function Services() {
  const services = [
    { icon: "📱", title: "Mobile Apps", description: "Android & cross-platform solutions" },
    { icon: "🌐", title: "Web Development", description: "React, Vite, and modern stacks" },
    { icon: "☁️", title: "Cloud & Backend", description: "Firebase, REST APIs, and more" },
  ];

  return (
    <Section id="services" label="Services" title="What We Offer">
      <AppCardList
        apps={services.map((s) => ({
          icon: s.icon,
          title: s.title,
          description: s.description,
        }))}
      />
    </Section>
  );
}
