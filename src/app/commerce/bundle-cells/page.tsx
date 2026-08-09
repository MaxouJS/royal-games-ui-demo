import { ExportPage, Notes } from "@/components/ExportPage";
import { Preview } from "@/components/Preview";
import { Source } from "@/components/Source";
import { findExport } from "@/components/exports";
import { Demo } from "./client";

const e = findExport("/commerce/bundle-cells/")!;

const CODE =
  '<BundleCells>\n  <BundleCell><Coin size="large" />12,000</BundleCell>\n  <BundleCell><Gem size="large" />80</BundleCell>\n</BundleCells>';

export default function Page() {
  return (
    <ExportPage group={e.group} title={e.name} lede={e.lede}>
      <Preview center>
        <Demo />
      </Preview>
      <Source code={CODE} />
      <Notes>
        <p>
          Inlaid wells showing what a bundle contains, cells stretch to match
          each other.
        </p>
      </Notes>
    </ExportPage>
  );
}
