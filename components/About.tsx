import Reveal from "./Reveal";

const EXPERIENCE = [
  { role: "Engineering Trainee Intern", org: "Telesoft Technologies", period: "Jun 2025 – Jan 2026" },
  { role: "Independent Projects", org: "NextContest · KnowTheRound", period: "2025 – 2026" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">[ About Me ]</p>
        </Reveal>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-paper tracking-tight">
                Hey, I&rsquo;m Ajith
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-fog text-lg leading-relaxed max-w-xl">
                A backend-leaning full-stack engineer who cares about systems that hold up under
                real traffic - not just demos. I like APIs that are secure by default, data
                models that don&rsquo;t fight you later, and code reviews that leave the codebase
                better than they found it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 pt-10 border-t border-line">
                <h3 className="font-serif italic text-2xl text-paper mb-2">
                  Backend + System Design
                </h3>
                <p className="text-fog max-w-lg">
                  Where clean APIs meet solid data models, careful caching, and code that&rsquo;s
                  built to scale.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fog mb-5">
                Experience
              </p>
              <ul className="space-y-6">
                {EXPERIENCE.map((item) => (
                  <li key={item.role} className="flex flex-col">
                    <span className="text-paper font-medium">{item.role}</span>
                    <span className="text-fog text-sm">{item.org}</span>
                    <span className="font-mono text-xs text-fog/70 mt-1">{item.period}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-line flex items-center justify-between">
                <span className="text-fog text-sm">B.E. CSE (AI &amp; ML)</span>
                <span className="font-mono text-sm text-mint">8.2 CGPA</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-fog text-sm">Sri Eshwar College of Engineering</span>
                <span className="font-mono text-xs text-fog/70">Apr 2026</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
