import img1 from "../assets/Inside1.jpeg";
import img2 from "../assets/Inside2.jpeg";
import img3 from "../assets/Inside3.jpeg";
import img4 from "../assets/Inside4.jpeg";
import img5 from "../assets/Inside5.jpeg";
import img6 from "../assets/Inside6.jpeg";

const GALLERY = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="font-script text-2xl text-ink-soft">our space</div>

        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Inside the clinic.
        </h2>

        {/* Mobile */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-sm bg-ink/10 ${
                i === 2 ? "row-span-2 aspect-[3/4]" : i === 5 ? "col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Clinic Interior ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="block h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  WebkitUserDrag: "none",
                  WebkitTouchCallout: "none",
                  userSelect: "none",
                  touchAction: "manipulation",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                } as any}
              />
            </div>
          ))}
        </div>

        {/* Desktop (UNCHANGED) */}
        <div className="mt-12 hidden lg:block">
          <div className="grid h-[500px] grid-cols-4 grid-rows-2 gap-4 xl:h-[600px]">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-sm bg-ink/10 ${
                  i === 2
                    ? "row-span-2"
                    : i === 4
                    ? "col-span-2"
                    : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Clinic Interior ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{
                    WebkitUserDrag: "none",
                    WebkitTouchCallout: "none",
                    userSelect: "none",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  } as any}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
