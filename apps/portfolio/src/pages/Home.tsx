import { Section } from "ui";
import { profile } from "../data/profile";
import { Button } from "ui";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary-900 to-secondary-800 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="mx-auto mb-6 h-32 w-32 rounded-full ring-4 ring-primary-500 object-cover"
          />
          <h1 className="text-4xl font-bold sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl text-secondary-200">
            {profile.title}
          </p>
          <p className="mt-1 text-sm text-secondary-300">
            {profile.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/apps" variant="primary" size="lg">
              View Apps
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      <Section id="about" label="About" title="Developer by passion, learner by nature.">
        <p className="text-secondary-100">
          I am Moe Kyaw Aung, a Senior Android Developer focused on building
          high-performance mobile applications with Kotlin, Jetpack Compose,
          and Clean Architecture.
        </p>
      </Section>

      <Section id="apps" label="Collection" title="App Collection">
        <p className="text-secondary-100 mb-6">
          A collection of my senior-level apps and projects.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* You can import AppCard and render apps here */}
          <div>See /apps page for full list</div>
        </div>
      </Section>
    </div>
  );
}
