import Link from "next/link";
import { GROUPS } from "@/components/exports";

const g = GROUPS.find((g) => g.title === "Panels")!;

export default function Page() {
  return (
    <article>
      <span className="eyebrow">Section</span>
      <h1 className="page-title">{g.title}</h1>
      <p className="lede">{g.lede} 3 components in this section.</p>
      <div className="home-grid">
        {g.pages.map((p) => (
          <Link key={p.href} href={p.href} className="home-card">
            <b>{p.name}</b>
            <p>{p.lede}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}
