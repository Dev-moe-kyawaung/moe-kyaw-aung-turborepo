import { Section } from "ui";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <Section id="experience" label="Career" title="Professional Experience">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-secondary-200 bg-white p-6">
          <h3 className="mb-2 text-lg font-semibold">Summary</h3>
          <p className="text-secondary-100">
            Senior Android Engineer with strong experience designing and delivering
            high-performance mobile applications using Kotlin, Jetpack, MVVM/MVI,
            and Clean Architecture.
          </p>
        </div>

        <div className="rounded-lg border border-secondary-200 bg-white p-6">
          <h3 className="mb-2 text-lg font-semibold">Core Skills</h3>
          <ul className="space-y-2 text-secondary-100">
            <li><strong>Android:</strong> Kotlin, Jetpack (Compose, ViewModel, Navigation, Room, Paging), Material 3</li>
            <li><strong>Architecture:</strong> Clean Architecture, MVVM, MVI, Multi-module applications</li>
            <li><strong>Backend:</strong> Firebase Suite, REST APIs, Retrofit, OkHttp, JSON</li>
            <li><strong>DevOps:</strong> GitHub Actions, Azure DevOps, Jenkins, Fastlane</li>
            <li><strong>Testing:</strong> JUnit, Espresso, MockK, UI & Integration tests</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
