import Reveal from "./Reveal";

const SKILL_GROUPS = [
  {
    label: "Backend",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "OAuth2", "Hibernate", "Spring Data JPA"],
  },
  {
    label: "Data & Cache",
    tags: ["PostgreSQL", "MySQL", "Redis", "Flyway"],
  },
  {
    label: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Tooling",
    tags: ["Docker", "Git", "GitHub", "Postman", "WebSocket"],
  },
  {
    label: "Fundamentals",
    tags: ["Data Structures & Algorithms", "OOP", "System Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">[ Skills ]</p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16">
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-paper tracking-tight">
                Java, Spring Boot
                <br />
                &amp; systems.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-fog text-lg leading-relaxed max-w-md">
                I bring together backend engineering, clean API design, and just enough frontend
                to ship a full product — the right data model, the right caching strategy, and
                endpoints that hold up under load.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-fog text-lg leading-relaxed max-w-md">
                I care about what actually makes a backend reliable — auth done right, queries
                that don&rsquo;t fall over at scale, and code that&rsquo;s easy for the next
                engineer to read.
              </p>
            </Reveal>
          </div>

          <div className="space-y-7">
            {SKILL_GROUPS.map((group, i) => (
              <Reveal key={group.label} delay={0.1 + i * 0.05}>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-fog mb-3">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border border-line text-sm text-paper/90 hover:border-indigo hover:text-indigo transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
