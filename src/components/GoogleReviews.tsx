import { Icon } from "./Icon";
import { motion } from "framer-motion";
import { useAutoScroll } from "../hooks/useAutoScroll";

const REVIEWS = [
  {
    name: "Anjali Rao",
    date: "1 week ago",
    text: "Dr. Koushik is incredible. He took the time to understand my skin concerns and explained the treatment plan clearly. Highly recommend!",
    photo: "A",
  },
  {
    name: "Vikram Reddy",
    date: "3 weeks ago",
    text: "The clinic is beautiful and the staff is very welcoming. I saw results from my hair fall treatment within the first few sessions.",
    photo: "V",
  },
  {
    name: "Sneha Patel",
    date: "1 month ago",
    text: "Best dermatologist in Hyderabad. Very professional and the hygiene standards are top-notch. My acne scars have faded significantly.",
    photo: "S",
  },
  {
    name: "Karan Singh",
    date: "2 months ago",
    text: "I was struggling with severe pigmentation for years. The personalized care and advanced laser treatments here changed everything for me.",
    photo: "K",
  },
  {
    name: "Priya Menon",
    date: "2 months ago",
    text: "Absolutely premium experience from start to finish. The clinic feels like a spa and the doctor is genuinely caring. 5 stars!",
    photo: "P",
  },
];

export function GoogleReviews() {
  const containerRef = useAutoScroll(0.8);

  return (
    <section className="py-20 lg:py-28 bg-sage overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                <div 
                  key={i} 
                  className="bg-cream border border-ink/10 p-7 w-[300px] sm:w-[380px] shrink-0 shadow-sm hover:shadow-md transition-shadow duration-300 snap-center rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-ink text-cream flex items-center justify-center font-display text-xl">
                      {review.photo}
                    </div>
                    <div>
                      <div className="font-display text-lg text-ink">{review.name}</div>
                      <div className="text-xs text-ink/50 tracking-wide">{review.date}</div>
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
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
