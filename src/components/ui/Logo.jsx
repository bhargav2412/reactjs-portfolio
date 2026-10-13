export default function Logo({ className = "" }) {
  return (
    <a
      href="#home"
      className={`group inline-flex items-baseline text-xl font-bold tracking-tight ${className}`}
      aria-label="BG Code — back to top"
    >
      <span className="text-brand">BG</span>
      <span>Code</span>
      <span className="text-brand transition-transform duration-300 group-hover:translate-x-0.5">&gt;</span>
    </a>
  );
}
