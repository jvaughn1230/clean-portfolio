import Image from "next/image";
import { site } from "@/data/site";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="mb-12 py-16">
      <div className="mx-auto flex max-w-[1000px] items-center gap-12 max-md:flex-col max-md:gap-8 max-md:text-center">
        <div className="shrink-0">
          <Image
            src="/placeholders/portrait.svg"
            alt={site.name}
            width={250}
            height={250}
            priority
            className="h-[250px] w-[250px] rounded-full object-contain shadow-[0_4px_12px_var(--shadow)] transition-shadow duration-300 max-md:h-[200px] max-md:w-[200px]"
          />
        </div>
        <div className="flex-1 text-left max-md:text-center">
          <h1
            className="mb-4 font-[family-name:var(--font-dm-serif)] text-[5rem] font-normal leading-[1.1] tracking-[-0.02em] transition-colors duration-300 max-md:text-[3.5rem]"
            style={{ color: "var(--heading-color)" }}
          >
            {site.name}
          </h1>
          <p
            className="mb-6 text-xl transition-colors duration-300"
            style={{ color: "var(--text-muted)" }}
          >
            {site.tagline}
          </p>
          <div className="mt-4 flex gap-4 max-md:justify-center">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
              style={{ color: "var(--accent-color)" }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
              style={{ color: "var(--accent-color)" }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
