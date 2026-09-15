import Reveal from "./Reveal";

const STATS = [
  { num: "500+", label: "LeetCode problems solved" },
  { num: "1800+", label: "LeetCode contest rating" },
  { num: "900+", label: "Codeforces rating" },
  { num: "5th", label: "Place, Nexus24 Hackathon" },
];

export default function Journey() {
  return (
    <section id="journey" className="py-28 md:py-36 bg-surface/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">[ A bit more about me ]</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-paper tracking-tight mb-14 max-w-2xl">
            Warning: some backstory ahead.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16">
          <div className="space-y-6 text-fog text-lg leading-relaxed max-w-xl">
            <Reveal>
              <p>
                I got into engineering the way a lot of backend people do — through competitive
                programming. Solving problems on LeetCode and Codeforces taught me to think in
                terms of complexity and edge cases before I ever wrote a line of Spring Boot.
                That habit stuck: I still sketch out the data model and failure cases before I
                touch a controller.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                During my internship at Telesoft, I got to see what that discipline looks like at
                team scale — code reviews, Agile ceremonies, and the small, unglamorous decisions
                (role-based access, sync bugs, page-load regressions) that decide whether a
                product actually works for users.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Outside of work, I&rsquo;ve been building full products on my own — KnowTheRound
                and NextContest weren&rsquo;t tutorials I followed, they were systems I designed
                from the schema up: auth, caching, background jobs, the parts that don&rsquo;t
                show up in a demo but decide whether something survives real traffic.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-paper">
                That&rsquo;s the part of engineering I&rsquo;m most drawn to — not just making
                something work, but making it hold up.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-surface p-6 flex flex-col justify-between min-h-[130px]"
                >
                  <span className="font-serif text-3xl text-indigo">{stat.num}</span>
                  <span className="text-fog text-sm mt-3">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
