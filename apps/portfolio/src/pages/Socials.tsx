import { Section, SocialLink } from "ui";
import { socialLinks } from "../data/socials";

export default function Socials() {
  return (
    <Section id="socials" label="Social" title="Social Media Accounts">
      <p className="mb-6 text-secondary-100">
        All major social and professional accounts.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socialLinks.map((s, idx) => (
          <SocialLink key={idx} label={s.label} href={s.href} icon={s.icon} />
        ))}
      </div>
    </Section>
  );
}
