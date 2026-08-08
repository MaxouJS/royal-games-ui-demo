"use client";

import { SkinProvider } from "@objectifthunes/royal-games-ui";
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

/** Component stage: renders children inside the active docs skin. */
export function Preview({ col, center, style, children }: PreviewProps) {
  const { skin } = useDocsSkin();
  return (
    <div className="preview">
      <SkinProvider skin={skin}>
        <div className={`preview-inner${col ? " col" : ""}${center ? " center" : ""}`} style={style}>
          {children}
        </div>
      </SkinProvider>
    </div>
  );
}

/** Full-screen stage: a phone frame hosting a package Screen composition. */
export function PhonePreview({ children }: { children?: ReactNode }) {
  const { skin } = useDocsSkin();
  return (
    <div className="preview">
      <div className="preview-inner center" style={{ padding: "36px 16px" }}>
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
      </div>
    </div>
  );
}
