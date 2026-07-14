import { HorizontalRail } from "./HorizontalRail";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { OptimizedImage } from "./OptimizedImage";
import type { IMAGE_DATA } from "../image-data";

export const CONDITIONS: { name: string, blurb: string, img: keyof typeof IMAGE_DATA }[] = [
  {
    name: "Truncal Acne",
    blurb:
      "Acne affecting the chest, back, and shoulders. Early treatment helps prevent painful breakouts and permanent scarring.",
    img: "C10-TRUNCAL-ACNE",
  },
  {
    name: "Melasma",
    blurb:
      "A common pigmentation disorder causing brown or gray patches on the face. Expert treatment can help reduce discoloration and improve skin tone.",
    img: "C3-Melasma",
  },
  {
    name: "Acne",
    blurb:
      "A skin condition that causes pimples, blackheads, and inflamed bumps. Personalized treatment helps control breakouts and minimize acne scars.",
    img: "C9-Acne",
  },
  {
    name: "Pityriasis Alba (P. Alba)",
    blurb:
      "A common condition causing light-colored patches, especially in children and young adults. It is harmless and improves with proper skincare and treatment.",
    img: "C8-P-Alba",
  },
  {
    name: "Pityriasis Versicolor",
    blurb:
      "A fungal skin infection that causes lighter or darker patches on the skin. It can be effectively treated with appropriate medications.",
    img: "C7-pityriasis-versicolor",
  },
  {
    name: "Herpes Zoster (Shingles)",
    blurb:
      "A viral infection that causes a painful rash with blisters, usually on one side of the body. Early treatment helps reduce pain and complications.",
    img: "C6-Herpes-zoster",
  },
  {
    name: "Vitiligo",
    blurb:
      "A condition where the skin loses its natural pigment, leading to white patches. Modern treatments can help restore pigmentation and manage progression.",
    img: "C5-Vitiligo",
  },
  {
    name: "Lichen Planus",
    blurb:
      "An inflammatory condition causing itchy, purple-colored skin lesions or oral sores. Timely treatment helps relieve symptoms and prevent recurrence.",
    img: "C4-Lichen-planus",
  },
  {
    name: "Insect Bite Reaction",
    blurb:
      "An allergic or inflammatory response to insect bites causing redness, swelling, and itching. Treatment helps reduce discomfort and prevent infection.",
    img: "C2-Insect-Bite-Reaction",
  },
  {
    name: "Alopecia Areata",
    blurb:
      "An autoimmune condition that causes sudden patchy hair loss. Early diagnosis improves the chances of successful hair regrowth.",
    img: "C11-Alopecia-areata",
  },
  {
    name: "Androgenetic Alopecia",
    blurb:
      "The most common form of hereditary hair loss affecting both men and women. Advanced therapies can slow hair loss and stimulate regrowth.",
    img: "C1-ANDROGENETIC-ALOPECIA",
  },
  {
    name: "Seborrheic Dermatitis",
    blurb:
      "A chronic skin condition causing dandruff, redness, and flaky skin on the scalp and face. Proper treatment keeps symptoms under control.",
    img: "C14-Seborrheic-Dermatitis",
  },
  {
    name: "Chronic Plaque Psoriasis",
    blurb:
      "A long-term autoimmune skin disease causing thick, red, scaly patches. Personalized treatment helps manage flare-ups and improve quality of life.",
    img: "C13-Chronic-Plaque-Psoriasis",
  },
];

export function Conditions() {
  return (
    <HorizontalRail
      id="conditions"
      label="Conditions"
      title="Conditions We Treat"
    >
      {CONDITIONS.map((c) => (
        <motion.article
          key={c.name}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%] group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl bg-ink/10">
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
              className="w-full aspect-square"
            >
              <OptimizedImage
                baseName={c.img}
                alt={c.name}
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 26vw"
                className="w-full h-full object-cover bg-black/5"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl text-cream leading-tight">
              {c.name}
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-ink/70">
            {c.blurb}
          </p>

          <Link
            to="/book"
            className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink group-hover:text-ink-soft transition-colors"
          >
            Book Consultation →
          </Link>
        </motion.article>
      ))}
    </HorizontalRail>
  );
}
