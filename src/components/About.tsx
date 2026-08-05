import { site } from "@/data/site";

export function About() {
  return (
    <section className="mb-16">
      <h2
        className="mb-6 border-b-[3px] pb-2 text-[2rem] transition-colors duration-300"
        style={{
          color: "var(--heading-color)",
          borderColor: "var(--accent-color)",
        }}
      >
        About Me
      </h2>
      {site.about.map((paragraph) => (
        <p
          key={paragraph.slice(0, 24)}
          className="mb-4 text-[1.1rem] leading-8 transition-colors duration-300 last:mb-0"
          style={{ color: "var(--text-secondary)" }}
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
