import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  feedback: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoPlayInterval = 6000,
}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visibleCount = 3;
  const length = testimonials.length;

  const getVisibleIndexes = (currentIndex: number) => {
    const left = (currentIndex - 1 + length) % length;
    const center = currentIndex;
    const right = (currentIndex + 1) % length;
    return [left, center, right];
  };

  const next = () => setIndex((prev) => (prev + 1) % length);
  const prev = () => setIndex((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, autoPlayInterval);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, autoPlayInterval]);

  const visibleIndexes = getVisibleIndexes(index);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-12 py-20">
      <div className="flex justify-center items-center gap-4 relative">
        {visibleIndexes.map((i, position) => {
          const isCenter = i === index;
          return (
            <motion.div
              key={testimonials[i].id}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{
                opacity: isCenter ? 1 : 0.4,
                scale: isCenter ? 1 : 0.95,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full max-w-sm"
            >
              <Card
                className={`rounded-2xl shadow-lg transition-all bg-white text-[#14213d] p-6 flex flex-col items-center text-center`}
              >
                <img
                  src={testimonials[i].image}
                  alt={testimonials[i].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-[#fca311] mb-4 shadow-md"
                />
                <CardContent className="p-0">
                  <p className="text-base md:text-lg italic text-[#000000] mb-4">
                    “{testimonials[i].feedback}”
                  </p>
                  <p className="text-[#fca311] font-semibold text-sm md:text-base">
                    {testimonials[i].name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonials[i].designation}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <button
          onClick={prev}
          className="bg-[#000000] text-white p-2 rounded-full hover:bg-[#fca311] transition"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <button
          onClick={next}
          className="bg-[#000000] text-white p-2 rounded-full hover:bg-[#fca311] transition"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
