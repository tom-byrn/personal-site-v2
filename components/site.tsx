import { Safari } from "./magicui/safari";

export function KepriSite() {
  return (
    <div className="relative shadow-2xl">
      <Safari
        url="https://www.kepri.ie"
        className="size-full"
        imageSrc="/images/kepri-dashboard.png"
      />
    </div>
  );
}
