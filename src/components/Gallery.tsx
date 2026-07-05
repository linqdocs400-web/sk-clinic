import Inside1 from "../assets/Inside1.jpeg";
import Inside2 from "../assets/Inside2.jpeg";
import Inside3 from "../assets/Inside3.jpeg";
import Inside4 from "../assets/Inside4.jpeg";
import Inside5 from "../assets/Inside5.jpeg";
import Inside6 from "../assets/Inside6.jpeg";

const GALLERY = [Inside1, Inside2, Inside3, Inside4, Inside5, Inside6];

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="font-script text-2xl text-ink-soft">our space</div>

        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Inside the clinic.
        </h2>

        <div className="custom-scrollbar mt-12 overflow-x-auto pb-6 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-3 sm:gap-4 lg:grid lg:h-[500px] lg:w-full lg:grid-cols-4 lg:grid-rows-2 xl:h-[600px]">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`group relative shrink-0 overflow-hidden rounded-sm bg-ink/10 ${
                  i === 2
                    ? "aspect-[3/4] w-[240px] sm:w-[320px] lg:row-span-2 lg:h-full lg:w-full lg:aspect-auto"
                    : i === 4
                    ? "aspect-[3/2] w-[420px] sm:w-[560px] lg:col-span-2 lg:h-full lg:w-full lg:aspect-auto"
                    : "aspect-square w-[240px] sm:w-[320px] lg:h-full lg:w-full lg:aspect-auto"
                }`}
              >
                <img
                  src={src}
                  alt={`Clinic Interior ${i + 1}`}
                  draggable={false}
                  className="block h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                  style={{
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
