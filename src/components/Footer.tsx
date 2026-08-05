import { site } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="px-8 py-6 text-center text-sm transition-colors duration-300"
      style={{ color: "var(--text-muted)" }}
    >
      <p className="m-0">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
