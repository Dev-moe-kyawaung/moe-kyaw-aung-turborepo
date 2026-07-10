import { Section, AppCardList } from "ui";

export default function CaseStudies() {
  const cases = [
    { icon: "🏥", title: "Healthcare Platform", description: "Patient management system" },
    { icon: "🏦", title: "Financial Dashboard", description: "Real-time analytics UI" },
  ];

  return (
    <Section id="cases" label="Case Studies" title="Success Stories">
      <AppCardList
        apps={cases.map((c) => ({
          icon: c.icon,
          title: c.title,
          description: c.description,
        }))}
      />
    </Section>
  );
}
