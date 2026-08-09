"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GROUPS } from "./exports";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/" className="brand">
        <span className="crown">♛</span>
        <span>
          <b>royal-games-ui</b>
          <small>Midnight Court · docs</small>
        </span>
      </Link>
      {GROUPS.map((g) => (
        <div className="nav-group" key={g.title}>
          <span>
            <Link
              href={g.href}
              className={pathname === g.href ? "active" : undefined}
              style={{ padding: 0, display: "inline" }}
            >
              {g.title}
            </Link>
          </span>
          {g.pages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={pathname === p.href ? "active" : undefined}
            >
              {p.name}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
