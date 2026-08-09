"use client";

import {
  SkinProvider,
  useEntranceMotion,
} from "@objectifthunes/royal-games-ui";
import { Fragment, useEffect, type CSSProperties, type ReactNode } from "react";
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
  const { skin, motionCycle } = useDocsSkin();
  const { ref, playing, replay } = useEntranceMotion<HTMLDivElement>({
    threshold: 0.25,
  });

  useEffect(() => {
    if (motionCycle > 0) {
      replay();
    }
  }, [motionCycle, replay]);

  return (
    <div className="preview">
      <SkinProvider skin={skin}>
        <div
          ref={ref}
          className={`preview-inner${col ? " col" : ""}${center ? " center" : ""}${playing ? " rg-entering rg-play" : ""}`}
          style={style}
        >
          {children}
        </div>
      </SkinProvider>
    </div>
  );
}

/** Bare phone frame with a status bar, hosts a package Screen composition. */
export function PhoneFrame({
  size = "md",
  children,
}: {
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}) {
  const { skin, motionCycle } = useDocsSkin();
  return (
    <div className={size === "md" ? "phone" : `phone ${size}`}>
      <div className="phone-screen">
        <SkinProvider skin={skin} className="phone-skin">
          <Fragment key={motionCycle}>{children}</Fragment>
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
