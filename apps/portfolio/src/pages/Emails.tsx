import { Section } from "ui";
import { emails } from "../data/emails";

export default function Emails() {
  return (
    <Section id="emails" label="Contact" title="Email Address Collection">
      <p className="mb-6 text-secondary-100">
        Multiple email addresses for different purposes.
      </p>
      <div className="space-y-3">
        {emails.map((email, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-secondary-200 bg-white p-4"
          >
            <code className="text-sm">{email}</code>
          </div>
        ))}
      </div>
    </Section>
  );
}
