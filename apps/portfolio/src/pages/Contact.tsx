import { Section, Button, SocialLink, Avatar } from "ui";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socials";
import { emails } from "../data/emails";

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Get in Touch">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Avatar src={profile.avatar} alt={profile.name} size="xl" className="mb-6" />
          <h3 className="mb-2 text-lg font-semibold">{profile.name}</h3>
          <p className="text-secondary-100">{profile.title}</p>
          <p className="text-secondary-100">{profile.subtitle}</p>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Phone:</strong> {profile.phonePrimary}
            </p>
            <p className="text-secondary-100">
              <strong>Alt:</strong> {profile.phoneSecondary}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Emails</h3>
          <div className="space-y-2">
            {emails.slice(0, 6).map((email, idx) => (
              <div
                key={idx}
                className="rounded border border-secondary-200 bg-white p-3"
              >
                <code className="text-sm">{email}</code>
              </div>
            ))}
          </div>

          <h3 className="mt-8 mb-4 text-lg font-semibold">Social</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.slice(0, 6).map((s, idx) => (
              <SocialLink key={idx} label={s.label} href={s.href} icon={s.icon} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
