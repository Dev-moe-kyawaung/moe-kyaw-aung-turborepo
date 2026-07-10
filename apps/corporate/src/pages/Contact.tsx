import { Section, Button } from "ui";

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Contact Us">
      <p className="text-secondary-100">
        Reach out for partnerships, projects, or inquiries.
      </p>
      <div className="mt-6">
        <Button href="mailto:contact@company.com" variant="primary">
          Send Email
        </Button>
      </div>
    </Section>
  );
}
