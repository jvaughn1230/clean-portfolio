import Image from "next/image";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-lg border shadow-[0_2px_8px_var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_var(--shadow-hover)]"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div
        className="aspect-[2/1] overflow-hidden border-b"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-color)",
        }}
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          width={1886}
          height={892}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <h3
            className="m-0 text-2xl transition-colors duration-300"
            style={{ color: "var(--heading-color)" }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xl no-underline transition-all hover:-translate-y-0.5"
                style={{ color: "var(--heading-color)" }}
                aria-label={`${project.title} live site`}
              >
                ↗
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xl no-underline transition-all hover:-translate-y-0.5"
                style={{ color: "var(--heading-color)" }}
                aria-label={`${project.title} repository`}
              >
                ⌨
              </a>
            ) : null}
          </div>
        </div>
        <p
          className="m-0 leading-relaxed transition-colors duration-300"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>
        <ul className="mt-auto mb-0 flex list-none flex-wrap items-center gap-3 p-0">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border px-3 py-1 text-sm transition-colors duration-200"
              style={{
                color: "var(--text-muted)",
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
