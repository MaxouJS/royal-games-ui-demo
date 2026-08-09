import { highlight } from "@/lib/highlight";

export async function Source({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: "tsx" | "bash";
}) {
  const html = await highlight(code.trim(), lang);
  return <div className="source" dangerouslySetInnerHTML={{ __html: html }} />;
}
