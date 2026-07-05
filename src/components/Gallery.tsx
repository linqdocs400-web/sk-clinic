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

        <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">Inside the clinic.</h2>

        <div className="mt-12 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 custom-scrollbar lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
          <div className="flex lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-3 sm:gap-4 w-max lg:w-full lg:h-[500px] xl:h-[600px]">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden bg-ink/10 shrink-0 rounded-sm ${
                  i === 2
                    ? "lg:row-span-2 aspect-[3/4] lg:aspect-auto w-[240px] sm:w-[320px] lg:w-full lg:h-full"
                    : i === 4
                      ? "lg:col-span-2 aspect-[3/2] lg:aspect-auto w-[420px] sm:w-[560px] lg:w-full lg:h-full"
                      : "aspect-square lg:aspect-auto w-[240px] sm:w-[320px] lg:w-full lg:h-full"
                }`}
              >
                <img
                  src={src}
                  alt={`Clinic Interior ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
