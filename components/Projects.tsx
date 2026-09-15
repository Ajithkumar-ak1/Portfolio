import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "NextContest",
    tagline: "Never miss a contest again",
    description:
      "A competitive programming contest aggregator that unifies schedules from Codeforces, LeetCode, and CodeChef into one dashboard - with calendar views, reminders, and bookmarks. JWT + Google OAuth2 auth, a platform-isolated sync architecture across 3 independent APIs, and 40+ REST endpoints with scheduled background jobs.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "OAuth2", "Flyway", "Caffeine"],
    href: "https://github.com/Ajithkumar-ak1/NextContest--Frontend",
    gradient: "from-indigo/25 via-surface2 to-surface",
  },
  {
    name: "KnowTheRound",
    tagline: "Real interview experiences, searchable",
    description:
      "A full-stack platform for sharing, searching, bookmarking, and liking interview experiences across 20+ companies. Secure JWT auth with Redis-based token blacklisting, and 20+ REST endpoints with Redis caching + Spring Data JPA Specifications cutting average response time by ~35%.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JWT", "React", "Docker"],
    href: "https://github.com/Ajithkumar-ak1/KnowTheRound---Frontend",
    live: "https://knowtheround.vercel.app",
    gradient: "from-mint/20 via-surface2 to-surface",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">[ Projects ]</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-paper tracking-tight mb-16">
            Built end to end.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={0.1 + i * 0.08}>
              <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-stretch rounded-2xl border border-line bg-surface overflow-hidden">
                <div
                  className={`relative min-h-[220px] bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8`}
                >
                  <span className="font-serif italic text-5xl md:text-6xl text-paper/90">
                    {project.name.slice(0, 2)}
                  </span>
                  <span className="absolute bottom-5 left-6 font-mono text-xs text-fog uppercase tracking-wider">
                    {project.tagline}
                  </span>
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl text-paper mb-3">
                    {project.name}
                  </h3>
                  <p className="text-fog leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-full border border-line text-fog"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-paper font-medium underline-link"
                    >
                      Explore code <span aria-hidden>↗</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-fog hover:text-paper transition-colors font-medium underline-link"
                      >
                        Live demo <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
