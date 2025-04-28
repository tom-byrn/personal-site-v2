import { Safari } from "./magicui/safari";

export function KepriSite() {
  return (
    <div className="relative inline-block">
      <Safari
        url="https://www.kepri.ie"
        imageSrc="/images/kepri-stats.png"
        className="block w-full h-auto filter drop-shadow-2xl"
      />
    </div>
  );
}
