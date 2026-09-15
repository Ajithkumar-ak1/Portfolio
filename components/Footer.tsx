export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-paper text-sm font-medium">© 2026 Ajith Kumar</p>
          <p className="text-fog text-xs mt-1">Full-Stack Engineer — Java / Spring Boot</p>
        </div>
        <a
          href="#"
          className="font-mono text-xs text-fog hover:text-indigo transition-colors underline-link"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
