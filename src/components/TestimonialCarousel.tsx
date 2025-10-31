import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "ShineCraft exceeded all my expectations! My home has never looked better. The team was professional, punctual, and incredibly thorough.",
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "I've been using ShineCraft for my office for over a year now. Consistently excellent service. They're reliable and pay attention to every detail.",
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    text: "The deep cleaning service was amazing! They tackled areas I hadn't cleaned in years. Highly recommend for anyone needing a fresh start.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="transition-all duration-500 ease-in-out">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="card-gradient rounded-xl p-8 shadow-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
