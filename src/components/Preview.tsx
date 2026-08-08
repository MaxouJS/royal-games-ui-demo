"use client";

import { SkinProvider, usePlayOnView } from "@objectifthunes/royal-games-ui";
import type { CSSProperties, ReactNode } from "react";
import { useDocsSkin } from "./DocsShell";

export interface PreviewProps {
  /** Stack children vertically. */
  col?: boolean;
  /** Center children. */
  center?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Component stage: renders children inside the active docs skin and plays
 * the entrance choreography when scrolled into view (▶ MOTION replays it).
 */
export function Preview({ col, center, style, children }: PreviewProps) {
  const { skin } = useDocsSkin();
  const { ref } = usePlayOnView<HTMLDivElement>(0.25);
  return (
    <div className="preview">
      <SkinProvider skin={skin}>
        <div ref={ref} className={`preview-inner${col ? " col" : ""}${center ? " center" : ""}`} style={style}>
          {children}
        </div>
      </SkinProvider>
    </div>
  );
}

/** Bare phone frame with a status bar, hosts a package Screen composition. */
export function PhoneFrame({ children }: { children?: ReactNode }) {
  const { skin } = useDocsSkin();
  return (
    <div className="phone">
      <div className="phone-screen">
        <SkinProvider skin={skin} className="phone-skin">
          {children}
        </SkinProvider>
        <div className="statusbar">
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>
      </div>
    </div>
  );
}

/** Full-screen stage: a phone frame inside the preview chrome. */
export function PhonePreview({ children }: { children?: ReactNode }) {
  return (
    <div className="preview">
      <div className="preview-inner center" style={{ padding: "36px 16px" }}>
        <PhoneFrame>{children}</PhoneFrame>
      </div>
    </div>
  );
}
