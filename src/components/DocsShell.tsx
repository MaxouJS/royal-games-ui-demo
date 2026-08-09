"use client";

import "@objectifthunes/royal-games-ui/tokens.css";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Skin } from "@objectifthunes/royal-games-ui";

interface DocsSkinValue {
  skin: Skin;
  setSkin: (s: Skin) => void;
}

const DocsSkinContext = createContext<DocsSkinValue>({
  skin: "enamel",
  setSkin: () => {},
});

export function useDocsSkin() {
  return useContext(DocsSkinContext);
}

export function DocsShell({ children }: { children: ReactNode }) {
  const [skin, setSkin] = useState<Skin>("enamel");
  useEffect(() => {
    const saved = window.localStorage.getItem("rg-demo-skin");
    if (saved === "enamel" || saved === "gloss") setSkin(saved);
  }, []);
  const set = (s: Skin) => {
    setSkin(s);
    window.localStorage.setItem("rg-demo-skin", s);
  };
  return (
    <DocsSkinContext.Provider value={{ skin, setSkin: set }}>
      {children}
    </DocsSkinContext.Provider>
  );
}

export function DocsHeader() {
  const { skin, setSkin } = useDocsSkin();
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
