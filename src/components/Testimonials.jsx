import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quote } from "../assets/images";
import { testimonials } from "../data";

const PAGE_SIZE = 6;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) =>
        current + PAGE_SIZE >= testimonials.length ? 0 : current + PAGE_SIZE,
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const page = testimonials.slice(index, index + PAGE_SIZE);

  return (
    <section className="py-14 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-[#3A2A1B]">Testimonials</h2>
          <p className="mt-4 max-w-xl text-sm text-[#6B5A4A] leading-relaxed">
            Real experiences from homeowners who have trusted us and found more
            than just a home.
          </p>
          <div className="mt-3 w-100 h-[4px] bg-gradient-to-r from-red-500 to-green-400 rounded-full" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {page.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-xl p-6 min-h-[160px] shadow-sm hover:shadow-md transition"
              >
                <div className="absolute top-4 right-5 w-6 opacity-80">
                  <img alt="quote" src={quote} />
                </div>
                <p className="text-sm text-[#3A2A1B] leading-relaxed mb-4 pr-8">
                  "{item.text}"
                </p>
                <p className="text-sm text-[#6B5A4A] font-medium">— {item.name}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
