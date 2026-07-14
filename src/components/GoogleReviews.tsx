import { Icon } from "./Icon";
import { motion } from "framer-motion";
import { useAutoScroll } from "../hooks/useAutoScroll";

const REVIEWS = [
  {
    name: "VAMSHI CHEGURI",
    text: "Had a very good experience at this clinic. I visited for concerns like hair fall, thinning, reduced density, premature greying, and scalp issues. The doctor was patient, professional, and never seemed rushed. He listened carefully, explained each issue in detail, identified the root causes, and suggested a step-by-step treatment plan along with the necessary tests...",
    photo: "V",
    link: "https://maps.app.goo.gl/dDgQGKsGBfxeZNcY9",
    truncate: true
  },
  {
    name: "Raju Goud",
    text: "I have been suffering with pigmentation on my nose since 4 months..  consulted the doctor here . Could see improvement in just 7 days.. very good results . Polite staff.. clean environment.  Best skin clinic in dilsukhnagar.",
    photo: "R",
    link: "https://maps.app.goo.gl/Cbu7PfQSkTWq63ki6"
  },
  {
    name: "Sandhya Bhaskar",
    text: "I got anti aging treatment done here.. Got yellow chemical peel done. Could notice significant improvement in few days. Best skin clinic in Dilsukhnagar Gaddiannaram. Will surely recommend to my family and friends",
    photo: "S",
    link: "https://maps.app.goo.gl/REKaGDgDyKLWsLry5"
  },
  {
    name: "krishnaveni Akkenapalli",
    text: "I had bindhi allergy.. it got cured quickly. Thanks to Dr Kaushik .  Good hospital.. polite behaviour of staff",
    photo: "K",
    link: "https://maps.app.goo.gl/H99UUR3g6qSdJo568"
  },
  {
    name: "sandeep kalyankar",
    text: "Met Dr Kaushik for my face tan...doctor suggest a night serum and morning sunscreen.   My face is glowing .. very good results .  Best Skin Specialist in Dilsukhnagar .. good clinic for skin problems.",
    photo: "S",
    link: "https://maps.app.goo.gl/HDSPEdyTzFJ7fybSA"
  },
  {
    name: "Akhil sai chandra",
    text: "I have been suffering with baldness since past few years.. i visited Dr Kaushik's clinic here for GFC Treatment.  I got 2 sessions done..  i could see visible results .  I have been using online products which turned out to be fake.  Understood that ,i should be using products which are prescribed by dermatologist only.. wasted a lot of money buying medicines online.. got to know products available in pharmacy are the only products genuine and which give results..    Guys if you are looking for good treatment options for hairfall, Dr Kaushik is the best .",
    photo: "A",
    link: "https://maps.app.goo.gl/DXsdDexusMTxJdF68"
  },
  {
    name: "Bhukya Ashwine",
    text: "I have been suffering with chronic urticaria since july 2025.. I consulted Dr Kaushik in march in bhongir.   Sir explained me about the condition and suggested me to go with ASST and prescribed Some weekly injections of 9 doses.  I could start seeing improvement after 6 injections.  Thank you so much.. I would recommend this clinic to my frnds and family for any skin and hair issue..",
    photo: "B",
    link: "https://maps.app.goo.gl/614i96EdQxvY8wu1A"
  },
  {
    name: "Sajeed bhai",
    text: "I had alopecia areata over my eyebrows..  i have been using the medicines which sir prescribed.  I have lot of improvement in 1 month..  very polite behaviour. Good clinic.",
    photo: "S",
    link: "https://maps.app.goo.gl/7atSg5kZn3WDYHy28"
  },
  {
    name: "Malleshkodari Malleshkodari",
    text: "I have satisfied with my hair treatment. Thank you so much Dr. Kaushik Kumar sir",
    photo: "M",
    link: "https://maps.app.goo.gl/odu7phfcfBy2pT4H6"
  },
  {
    name: "Keshava Reddy",
    text: "Dr.koushik sir was very nice i am suffering with vitligo from 4 years and I went to dr.koushik his treatment was very nice the results are amazing",
    photo: "K",
    link: "https://maps.app.goo.gl/ERTsNiPdzKL9oAfZ8"
  }
];

export function GoogleReviews() {
 const containerRef = useAutoScroll(0.35);

  return (
    <section className="py-20 lg:py-28 bg-sage overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-script text-2xl text-ink-soft">patient stories</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 leading-tight">
              Real results. Real reviews.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-cream px-6 py-4 shadow-sm border border-ink/10">
            <div className="text-4xl font-display text-ink">4.9</div>
            <div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-ink/60 mt-1 font-medium tracking-wide uppercase">Based on 120+ Google Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div 
          className="mt-16 relative"
        >
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-sage to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-sage to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex gap-6 overflow-x-auto pb-8 custom-scrollbar snap-x snap-mandatory touch-pan-x"
            ref={containerRef as any}
          >
            <div
              className="flex gap-6 min-w-max"
            >
              {REVIEWS.map((review, i) => (
               <a
                 key={i}
                 href={review.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group bg-cream border border-ink/10 p-5 sm:p-6 w-[260px] sm:w-[320px] h-[240px] flex flex-col shrink-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 snap-center rounded-2xl cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-ink text-cream flex items-center justify-center font-display text-xl">
                      {review.photo}
                    </div>
                    <div>
                      <div className="font-display text-lg text-ink">{review.name}</div>
                      <div className="text-xs text-ink/50 tracking-wide">5 stars</div>
                    </div>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                      alt="Google" 
                      className="w-5 h-5 ml-auto opacity-80"
                    />
                  </div>
                  <div className="flex text-amber-500 mt-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed line-clamp-4 flex-grow">
                    "{review.text}"
                  </p>
                  <span className="text-xs text-ink/40 font-medium mt-2 group-hover:text-ink/70 transition-colors">Read on Google &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://maps.app.goo.gl/bx29btJPjHVVmcPDA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-cream text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink-soft transition inline-block shadow-sm"
          >
            Read All Google Reviews
          </a>
          <a
            href="https://maps.app.goo.gl/bx29btJPjHVVmcPDA"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/40 text-ink text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink hover:text-cream transition inline-block shadow-sm"
          >
            Write a Review
          </a>
        </motion.div>

      </div>
    </section>
  );
}
