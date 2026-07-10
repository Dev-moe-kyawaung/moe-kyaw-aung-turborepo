import { Section, AppCardList } from "ui";
import { apps } from "../data/apps";

export default function Apps() {
  return (
    <Section id="apps" label="Collection" title="App Collection">
      <p className="mb-6 text-secondary-100">
        A curated list of 16 apps representing my senior-level work.
      </p>
      <AppCardList
        apps={apps.map((a) => ({
          icon: a.icon,
          title: a.title,
          description: a.description,
          link: a.link,
          image: a.image,
        }))}
      />
    </Section>
  );
}
