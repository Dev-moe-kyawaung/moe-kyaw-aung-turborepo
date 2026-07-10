import { Section, TechChip } from "ui";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <Section
      id="certificates"
      label="Credentials"
      title="Certificates"
    >
      <p className="mb-6 text-secondary-100">
        {certificates.total}+ certificates across {certificates.categories.length} categories.
      </p>

      <div className="flex flex-wrap gap-3">
        {certificates.categories.map((cat) => (
          <TechChip
            key={cat.name}
            label={`${cat.icon} ${cat.name} (${cat.count})`}
          />
        ))}
      </div>
    </Section>
  );
}
