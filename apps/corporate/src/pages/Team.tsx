import { Section, Avatar } from "ui";

export default function Team() {
  return (
    <Section id="team" label="Team" title="Our Team">
      <div className="flex flex-wrap gap-6">
        <Avatar src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png" alt="Member" size="lg" />
        <Avatar src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778747388/image-1_1_khsx9s.png" alt="Member" size="lg" />
        <Avatar src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp" alt="Member" size="lg" />
      </div>
    </Section>
  );
}
