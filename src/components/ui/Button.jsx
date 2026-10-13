const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary: "bg-fg text-bg shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-pink/20",
  secondary: "border border-border bg-surface text-fg hover:-translate-y-0.5 hover:border-fg/30 hover:bg-surface-2",
};

// Renders an <a> when `href` is given, otherwise a <button>.
export default function Button({ variant = "primary", href, className = "", children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
