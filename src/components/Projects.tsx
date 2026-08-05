import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section className="mb-16">
      <h2
        className="mb-6 border-b-[3px] pb-2 text-[2rem] transition-colors duration-300"
        style={{
          color: "var(--heading-color)",
          borderColor: "var(--accent-color)",
        }}
      >
        Featured Projects
      </h2>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
