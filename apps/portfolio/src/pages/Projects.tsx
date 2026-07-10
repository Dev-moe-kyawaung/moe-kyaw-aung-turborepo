import { Section, AppCardList, Button } from "ui";
import { apps } from "../data/apps";

export default function Projects() {
  const featured = apps.slice(0, 6);

  return (
    <Section id="projects" label="Work" title="Featured Projects">
      <p className="mb-6 text-secondary-100">
        Selected projects showing senior-level architecture and design.
      </p>
      <AppCardList
        apps={featured.map((a) => ({
          icon: a.icon,
          title: a.title,
          description: a.description,
          link: a.link,
          image: a.image,
        }))}
      />
      <div className="mt-8">
        <Button href="/apps" variant="secondary">
          View All Apps
        </Button>
      </div>
    </Section>
  );
}
