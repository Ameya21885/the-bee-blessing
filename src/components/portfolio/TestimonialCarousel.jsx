"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import "./testimonialCarousel.css";

const TestimonialCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          {" "}
          <TestimonialCard />{" "}
        </div>
        <div className="embla__slide">
          {" "}
          <TestimonialCard />{" "}
        </div>
        <div className="embla__slide">
          {" "}
          <TestimonialCard />{" "}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
