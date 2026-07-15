import { OptimizedImage } from "./OptimizedImage";

const GALLERY_IMAGES = ["Inside1", "Inside2", "Inside3", "Inside4", "Inside5", "Inside6"];

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="font-script text-2xl text-ink-soft">our space</div>

        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Inside the clinic.</h2>

        {/* Mobile */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
          {GALLERY_IMAGES.map((baseName, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-sm bg-ink/10 ${
                i === 2
                  ? "row-span-2 aspect-[3/4]"
                  : i === 5
                    ? "col-span-2 aspect-[2/1]"
                    : "aspect-square"
              }`}
            >
              <OptimizedImage
                baseName={baseName as any}
                alt={`Clinic Interior ${i + 1}`}
                className="block h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  WebkitUserDrag: "none",
                  WebkitTouchCallout: "none",
                  userSelect: "none",
                  touchAction: "manipulation",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden lg:block">
          <div className="grid h-[500px] grid-cols-4 grid-rows-2 gap-4 xl:h-[600px]">
            {GALLERY_IMAGES.map((baseName, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-sm bg-ink/10 ${
                  i === 2 ? "row-span-2" : i === 4 ? "col-span-2" : ""
                }`}
              >
                <OptimizedImage
                  baseName={baseName as any}
                  alt={`Clinic Interior ${i + 1}`}
                  className="block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{
                    WebkitUserDrag: "none",
                    WebkitTouchCallout: "none",
                    userSelect: "none",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
