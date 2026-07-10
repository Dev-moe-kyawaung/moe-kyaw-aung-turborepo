import { Section, Avatar } from "ui";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" label="About" title="About Moe Kyaw Aung">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Avatar src={profile.avatar} alt={profile.name} size="xl" className="mb-6" />
          <p className="text-secondary-100">
            Passionate and self-motivated developer focused on building responsive,
            modern, and user-friendly experiences. From web to mobile, databases
            to AI — I consistently expand my skill set across the full technology
            spectrum.
          </p>
          <p className="mt-4 text-secondary-100">
            I build with intention: clean code, modern practices, and a genuine
            love for problem-solving.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold">Focus Areas</h3>
          <ul className="space-y-3 text-secondary-100">
            <li><strong>Mobile:</strong> {profile.focus.mobile}</li>
            <li><strong>Backend:</strong> {profile.focus.backend}</li>
            <li><strong>Security:</strong> {profile.focus.security}</li>
            <li><strong>AI / ML:</strong> {profile.focus.ai}</li>
          </ul>

          <h3 className="mt-6 mb-4 text-lg font-semibold">Info</h3>
          <ul className="space-y-2 text-secondary-100">
            <li><strong>Currently Building:</strong> {profile.currentlyBuilding}</li>
            <li><strong>Certifications:</strong> {profile.certifications}</li>
            <li><strong>Philosophy:</strong> {profile.philosophy}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
