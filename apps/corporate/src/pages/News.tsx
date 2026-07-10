import { Section, Button } from "ui";

export default function News() {
  const posts = [
    { title: "Company Launch Announcement", link: "#" },
    { title: "New Product Release", link: "#" },
  ];

  return (
    <Section id="news" label="News" title="Latest News">
      <div className="space-y-4">
        {posts.map((p, idx) => (
          <div
            key={idx}
            className="rounded border border-secondary-200 bg-white p-5"
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
