import { Section, Button } from "ui";
import { githubAccounts } from "../data/githubCollections";

export default function GitHubCollections() {
  return (
    <Section
      id="github"
      label="GitHub"
      title="GitHub Accounts Collection"
    >
      <p className="mb-6 text-secondary-100">
        Over 40 GitHub-hosted portfolio and project sites.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {githubAccounts.map((url, idx) => (
          <Button key={idx} href={url} variant="secondary" size="sm">
            {url}
          </Button>
        ))}
      </div>
    </Section>
  );
}
