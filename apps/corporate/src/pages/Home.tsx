import { Section, Button } from "ui";

export default function Home() {
  return (
    <Section id="home" label="Welcome" title="Innovating Digital Solutions">
      <p className="text-secondary-100">
        We deliver enterprise-grade mobile and web applications with a focus
        on performance, security, and user experience.
      </p>
      <div className="mt-6">
        <Button href="/services" variant="primary">
          Our Services
        </Button>
      </div>
    </Section>
  );
}
