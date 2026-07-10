import { Section, Button } from "ui";
import { lovableApps } from "../data/lovableApps";

export default function LovableApps() {
  return (
    <Section id="lovable" label="Lovable" title="Lovable App Links">
      <p className="mb-6 text-secondary-100">
        Personal and project pages built with Lovable.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lovableApps.map((url, idx) => (
          <Button key={idx} href={url} variant="secondary" size="sm">
            {url}
          </Button>
        ))}
      </div>
    </Section>
  );
}
