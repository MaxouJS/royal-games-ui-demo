"use client";

import "@objectifthunes/royal-games-ui/tokens.css";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Skin } from "@objectifthunes/royal-games-ui";

interface DocsSkinValue {
  skin: Skin;
  setSkin: (s: Skin) => void;
  motionCycle: number;
  replayMotion: () => void;
}

const DocsSkinContext = createContext<DocsSkinValue>({
  skin: "enamel",
  setSkin: () => {},
  motionCycle: 0,
  replayMotion: () => {},
});

export function useDocsSkin() {
  return useContext(DocsSkinContext);
}

export function DocsShell({ children }: { children: ReactNode }) {
  const [skin, setSkin] = useState<Skin>("enamel");
  const [motionCycle, setMotionCycle] = useState(0);

  useEffect(() => {
    const saved = window.localStorage.getItem("rg-demo-skin");
    if (saved === "enamel" || saved === "gloss") setSkin(saved);
  }, []);

  const set = useCallback((s: Skin) => {
    setSkin(s);
    window.localStorage.setItem("rg-demo-skin", s);
  }, []);
  const replayMotion = useCallback(() => {
    setMotionCycle((current) => current + 1);
  }, []);
  const context = useMemo(
    () => ({ skin, setSkin: set, motionCycle, replayMotion }),
    [motionCycle, replayMotion, set, skin],
  );

  return (
    <DocsSkinContext.Provider value={context}>
      {children}
    </DocsSkinContext.Provider>
  );
}

export function DocsHeader() {
  const { skin, setSkin, replayMotion } = useDocsSkin();
  return (
    <div className="docs-header">
      <button
        className={`hbtn${skin === "enamel" ? " on" : ""}`}
        onClick={() => setSkin("enamel")}
      >
        ENAMEL
      </button>
      <button
        className={`hbtn${skin === "gloss" ? " on" : ""}`}
        onClick={() => setSkin("gloss")}
      >
        GLOSS
      </button>
      <span className="sep" />
      <button className="hbtn" onClick={replayMotion}>
        ▶ MOTION
      </button>
      <a
        className="hbtn"
        href="https://www.npmjs.com/package/@objectifthunes/royal-games-ui"
        target="_blank"
        rel="noreferrer"
      >
        npm
      </a>
    </div>
  );
}
