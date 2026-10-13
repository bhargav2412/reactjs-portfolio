// Central place for personal details and site-wide content.
// Update values here; components read from this file.

export const profile = {
  name: "Bhargav Gohel",
  role: "Full-Stack Developer",
  location: "Bengaluru, India",
  email: "bhargavgohel10@gmail.com",
  phone: "+91 88660 91992",
  phoneHref: "tel:+918866091992",
  github: "https://github.com/bhargav2412",
  availability: "Open to new projects & collaborations",
  tagline:
    "I design and build fast, scalable web applications — from robust APIs and databases to polished, responsive interfaces.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "40+", label: "Projects completed" },
];

export const about = {
  intro:
    "I'm a full-stack developer with over 7 years of hands-on experience turning ideas into reliable, production-ready software.",
  paragraphs: [
    "I'm passionate about exploring and mastering emerging technologies, and I look for opportunities to bring innovative solutions to every project while staying ahead of industry trends.",
    "I hold a relentless commitment to quality — writing clean, maintainable code that scales, performs and keeps clients happy long after launch.",
  ],
};

export const skillGroups = [
  { title: "Backend", skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs"] },
  { title: "Frontend", skills: ["JavaScript", "React.js", "HTML & CSS", "Responsive UI"] },
  { title: "Databases", skills: ["MongoDB", "MySQL", "Schema design"] },
];

// Web3Forms access keys are public by design; override with VITE_WEB3FORMS_KEY if needed.
export const contactForm = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey:
    import.meta.env.VITE_WEB3FORMS_KEY || "520e75f8-5bc2-408c-83dd-7878b3b7684d",
};
