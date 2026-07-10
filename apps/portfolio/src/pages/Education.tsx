import { Section } from "ui";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Education & Learning">
      <div className="space-y-6">
        <div className="rounded-lg border border-secondary-200 bg-white p-6">
          <h3 className="mb-2 text-lg font-semibold">Learning Journey</h3>
          <p className="text-secondary-100">
            Continuous self-driven learning across web, mobile, databases, AI,
            security, and business topics.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 bg-white p-6">
          <h3 className="mb-2 text-lg font-semibold">Certifications</h3>
          <p className="text-secondary-100">
            82+ certificates from Programming Hub across 9 major domains.
          </p>
        </div>
      </div>
    </Section>
  );
}
