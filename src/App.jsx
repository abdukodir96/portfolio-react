// src/App.jsx
import React, { useState } from "react";
import profileImg from "./assets/profile.webp";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  {
    href: "https://github.com/abdukodir96",
    label: "GitHub",
    external: true,
  },
];

const techStack = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "ts" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Git & GitHub", icon: "github" },
  { name: "Postman", icon: "postman" },
];

const highlights = [
  "Building clean and scalable full-stack applications",
  "Turning business ideas into real-world web products",
  "Writing maintainable, readable and testable code",
];

// Portfolio projects (keyinchalik update qilaman)
const projects = [
  {
    title: "Developer Portfolio",
    role: "Design & Full-Stack Implementation",
    description:
      "A modern personal portfolio built with React and Tailwind CSS to showcase my skills, tech stack and contact information.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/abdukodir96",
    demo: "#home",
  },
  {
    title: "Burak Restaurant Platform",
    role: "MERN Stack Developer",
    description:
      "A restaurant web application concept with menu management, online ordering flow and responsive UI for both desktop and mobile users.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abdukodir96",
    demo: "#",
  },
  {
    title: "Nestar Housing Project",
    role: "MERN Stack Developer",
    description:
      "Landing pages and UI components for a housing / real-estate platform prototype using Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/abdukodir96",
    demo: "#",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-sky-500 flex items-center justify-center text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/40">
              AS
            </div>
            <span className="font-semibold text-slate-100">
              Abdukodir Sheraliev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-300 transition"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-emerald-300 transition"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-slate-800 bg-slate-950/95">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 text-slate-300 hover:text-emerald-300 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-1 text-slate-300 hover:text-emerald-300 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Background gradients */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-28 pb-16">
        {/* HERO SECTION */}
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* LEFT: AVATAR + NAME */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-sky-500 blur-md opacity-70" />
              <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl shadow-emerald-500/10">
                <img
                  src={profileImg}
                  alt="Abdukodir"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center lg:text-left space-y-1">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Full-Stack Developer
              </p>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hi <span className="inline-block">👋</span>, I&apos;m{" "}
                <span className="text-emerald-400">Abdukodir</span>
              </h1>
              <p className="text-emerald-300 font-semibold">
                Full-Stack Developer
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                From Uzbekistan 🇺🇿 · based in South Korea 🇰🇷
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-xs text-slate-300">
                MERN Stack • REST APIs
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-xs text-slate-300">
                TypeScript • Next.js
              </span>
            </div>
          </div>

          {/* RIGHT: ABOUT + BUTTONS + HIGHLIGHTS */}
          <div className="flex-1 w-full">
            <div className="rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl shadow-black/40 p-6 md:p-8 space-y-5 backdrop-blur">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
                A passionate Full-Stack Developer
              </h2>

              <ul className="space-y-2 text-sm md:text-base text-slate-300">
                <li>
                  ▸ Building scalable web applications with{" "}
                  <span className="font-medium text-emerald-300">
                    React, Node.js, Express, MongoDB
                  </span>
                </li>
                <li>
                  ▸ Interested in{" "}
                  <span className="font-medium text-emerald-300">
                    backend development, APIs & system design
                  </span>
                </li>
                <li>
                  ▸ Currently improving my skills in{" "}
                  <span className="font-medium text-emerald-300">
                    TypeScript, Next.js and testing
                  </span>
                </li>
                <li>
                  ▸ Open to collaborate on{" "}
                  <span className="font-medium text-emerald-300">
                    full-stack & backend projects
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://github.com/abdukodir96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-slate-950 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
                >
                  🔗 View my GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  📨 Contact me
                </a>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs md:text-sm text-slate-300"
                >
                  <span className="mr-2">✨</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-10 border-t border-slate-800" />

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-4">
          <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span>📂</span>
            <span>Selected Projects</span>
          </h3>

          <p className="text-sm md:text-base text-slate-300">
            A few projects I&apos;ve been working on recently. I&apos;m focused
            on building clean, maintainable and production-ready full-stack
            applications.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5 shadow-xl shadow-black/20 hover:border-emerald-400 hover:-translate-y-1 transition"
              >
                <h4 className="text-base md:text-lg font-semibold text-slate-50 mb-1">
                  {project.title}
                </h4>
                <p className="text-xs text-emerald-300 mb-2">{project.role}</p>
                <p className="text-xs md:text-sm text-slate-300 flex-1">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-950/60 border border-slate-700 px-2.5 py-0.5 text-[11px] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-1 rounded-full border border-slate-600 px-3 py-1.5 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-1 rounded-full bg-emerald-500 text-slate-950 px-3 py-1.5 font-semibold hover:bg-emerald-400 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-10 border-t border-slate-800" />

        {/* TECH STACK SECTION */}
        <section id="skills" className="space-y-4">
          <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span>🛠</span>
            <span>My favorite tools & technologies</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 hover:border-emerald-400 hover:text-emerald-300 transition"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                  className="w-9 h-9"
                />
                <p className="text-xs md:text-sm text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mt-16 space-y-4">
          <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span>📬</span>
            <span>Contact</span>
          </h3>

          <div className="grid md:grid-cols-[1.4fr,2fr] gap-6">
            <div className="space-y-3 text-sm md:text-base text-slate-300">
              <p>
                If you&apos;re looking for a full-stack developer to join your
                team, collaborate on a project, or build something from scratch
                — feel free to reach out.
              </p>
              <p>
                I&apos;m especially interested in{" "}
                <span className="text-emerald-300 font-medium">
                  backend-heavy MERN projects, dashboards, and SaaS products
                </span>
                .
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:yourmail@gmail.com"
                    className="text-emerald-300 hover:underline"
                  >
                    abdukodirsheraliev1@gmail.com
                  </a>
                </p>
                <p>
                  🔗 GitHub:{" "}
                  <a
                    href="https://github.com/abdukodir96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:underline"
                  >
                    github.com/abdukodir96
                  </a>
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-slate-900/70 border border-slate-800 p-5 md:p-6 space-y-4 shadow-xl shadow-black/30"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none"
                  placeholder="Tell me a bit about your project or idea..."
                />
              </div>

              {status && (
                <p className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/40 rounded-xl px-3 py-2">
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-emerald-500 text-slate-950 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Abdukodir • Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}
