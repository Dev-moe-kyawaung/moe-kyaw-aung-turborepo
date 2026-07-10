import { Section, Button } from "ui";

export default function Blog() {
  const posts = [
    { title: "Building Clean Architecture in Android", link: "#" },
    { title: "Jetpack Compose Best Practices", link: "#" },
    { title: "Firebase Integration Patterns", link: "#" },
  ];

  return (
    <Section id="blog" label="Blog" title="Blog & Articles">
      <p className="mb-6 text-secondary-100">
        Technical articles and writing about mobile development and architecture.
      </p>
      <div className="space-y-4">
        {posts.map((p, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-secondary-200 bg-white p-5"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <div className="mt-3">
              <Button href={p.link} variant="secondary" size="sm">
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
