import { SkillIcon } from "@/components/SkillIcon";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section className="mb-16">
      <h2
        className="mb-6 border-b-[3px] pb-2 text-[2rem] transition-colors duration-300"
        style={{
          color: "var(--heading-color)",
          borderColor: "var(--accent-color)",
        }}
      >
        Skills
      </h2>
      <div className="flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3
              className="mb-4 text-xl font-semibold transition-colors duration-300"
              style={{ color: "var(--heading-color)" }}
            >
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-4 p-0">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div
                    tabIndex={0}
                    className="group relative flex h-16 w-16 cursor-default items-center justify-center rounded-xl border shadow-[0_2px_8px_var(--shadow)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_12px_var(--shadow-hover)] focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border-color)",
                      outlineColor: "var(--accent-color)",
                    }}
                    aria-label={skill.name}
                  >
                    <SkillIcon
                      name={skill.name}
                      icon={skill.icon}
                      className="h-9 w-9"
                    />
                    <span
                      className="pointer-events-none absolute top-[calc(100%+0.5rem)] left-1/2 z-10 -translate-x-1/2 rounded-md px-2.5 py-1 text-center text-sm whitespace-nowrap opacity-0 shadow-[0_2px_8px_var(--shadow)] transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                      style={{
                        backgroundColor: "var(--heading-color)",
                        color: "var(--bg-primary)",
                      }}
                      aria-hidden="true"
                    >
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
