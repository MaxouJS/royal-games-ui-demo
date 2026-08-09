import type { ReactNode } from "react";

/**
 * Demo stage primitives. Every component page composes its preview from
 * these four shapes; none of them takes ad-hoc widths or colors.
 * The lane is 332px: the kit's design width, so components render at
 * exactly the scale they have inside a reference screen.
 */

/** Vertical lane at the design width. Rows, panels, meters live here. */
export function Stack({ children }: { children?: ReactNode }) {
  return <div className="stage-stack">{children}</div>;
}

/** Centered wrapping band for glyphs, buttons and other inline pieces. */
export function Row({
  align,
  loose,
  children,
}: {
  align?: "top" | "end";
  loose?: boolean;
  children?: ReactNode;
}) {
  const cls = ["stage-row", align, loose && "loose"].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}

/**
 * Night backdrop box at the design width for scene pieces (map, pins,
 * float chrome, boards). `h` is the stage height, `field` swaps the
 * night sky for the merge-field green.
 */
export function Scene({
  h = 220,
  field = false,
  children,
}: {
  h?: number;
  field?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`stage-scene${field ? " field" : ""}`}
      style={{ height: h }}
    >
      {children}
    </div>
  );
}

/** Short caption under a preview, in the docs voice. */
export function Cap({ children }: { children?: ReactNode }) {
  return <p className="stage-cap">{children}</p>;
}
