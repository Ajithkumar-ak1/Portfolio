const ITEMS = [
  "Building secure APIs",
  "Designing for scale",
  "Caching before it hurts",
  "Shipping clean, tested code",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-line bg-surface overflow-hidden">
      <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] py-4">
        {[...track, ...track].map((item, i) => (
          <span
            key={i}
            className="mx-6 font-mono text-sm text-fog uppercase tracking-wide flex items-center gap-6"
          >
            {item} <span className="text-indigo">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
