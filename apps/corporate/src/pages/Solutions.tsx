import { Section, AppCardList } from "ui";

export default function Solutions() {
  const solutions = [
    { icon: "🏢", title: "Enterprise Solutions", description: "Custom platforms for businesses" },
    { icon: "📊", title: "Dashboards", description: "Analytics and admin interfaces" },
  ];

  return (
    <Section id="solutions" label="Solutions" title="Product Solutions">
      <AppCardList
        apps={solutions.map((s) => ({
          icon: s.icon,
          title: s.title,
          description: s.description,
        }))}
      />
    </Section>
  );
}
