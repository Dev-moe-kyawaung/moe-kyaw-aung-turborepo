import { Section } from "ui";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Client A",
      quote: "Exceptional Android developer. Delivered a complex app with clean architecture and great UX.",
    },
    {
      name: "Manager B",
      quote: "Moe consistently writes maintainable code and mentors junior developers effectively.",
    },
  ];

  return (
    <Section id="testimonials" label="Feedback" title="Testimonials">
      <div className="space-y-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-secondary-200 bg-white p-6"
          >
            <p className="text-secondary-100">"{t.quote}"</p>
            <p className="mt-3 font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
