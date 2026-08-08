import { createHighlighter, type Highlighter } from "shiki";

let highlighter: Promise<Highlighter> | null = null;

export function getHighlighter() {
  highlighter ??= createHighlighter({
    themes: ["tokyo-night"],
    langs: ["tsx", "bash"],
  });
  return highlighter;
}

export async function highlight(code: string, lang: "tsx" | "bash" = "tsx") {
  const h = await getHighlighter();
  return h.codeToHtml(code, { lang, theme: "tokyo-night" });
}
