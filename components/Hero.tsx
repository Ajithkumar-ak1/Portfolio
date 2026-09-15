"use client";

import { motion } from "framer-motion";

const ORBIT_WORDS = [
  "secure",
  "scalable",
  "tested",
  "clean",
  "fast",
  "reliable",
];

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-indigo/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <p className="eyebrow mb-6">
              full-stack engineer · java / spring boot
            </p>

            <h1 className="font-serif text-[2.6rem] leading-[1.08] md:text-[3.6rem] md:leading-[1.05] font-medium tracking-tight text-paper">
              I build backend systems
              <br />
              that <span className="italic text-indigo">scale, secure,</span>
              <br />
              and don&rsquo;t fall over.
            </h1>

            <p className="mt-7 text-fog text-lg max-w-xl">
              Full-stack engineer who leans backend - Java, Spring Boot,
              PostgreSQL, and just enough React to ship the whole product. CS
              (AI &amp; ML) graduate, six months of production code at Telesoft,
              and open to SDE roles now.
            </p>

            <div className="mt-8 border-l-2 border-line pl-5 max-w-lg">
              <p className="font-serif italic text-paper/90 text-base leading-relaxed">
                &ldquo;தெய்வத்தான் ஆகா தெனினும் முயற்சிதன்
                <br />
                மெய்வருத்தக் கூலி தரும்.&rdquo;
              </p>

              <p className="text-fog text-sm mt-2">
                Even when fate seems against you, relentless effort will
                always earn its reward.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-paper text-ink text-sm font-semibold hover:bg-indigo hover:text-paper transition-colors"
              >
                View my work
              </a>

              <a
                href="/Ajith%20Kumar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-line text-paper text-sm font-semibold hover:border-paper transition-colors"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-line text-paper text-sm font-semibold hover:border-paper transition-colors"
              >
                Let&rsquo;s talk
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
            {ORBIT_WORDS.map((word, i) => {
              const angle = (i / ORBIT_WORDS.length) * 2 * Math.PI;
              const radius = 168;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.span
                  key={word}
                  className="absolute font-mono text-[11px] uppercase tracking-wider text-fog px-2 py-1 rounded-full border border-line bg-surface/60"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {word}
                </motion.span>
              );
            })}

            <div className="absolute inset-[18%] rounded-full border border-line" />

            <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-indigo/30 via-surface2 to-surface border border-line overflow-hidden flex items-center justify-center">
              <img
                src="/profile.png"
                alt="Ajith Kumar"
                className="w-full h-full object-cover scale-[1.18]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}