import React from "react";
import StarRating from "./StarRating";

const TestimoniCards = ({ testimonials }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="font-primary">
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          {/* Container for the cards with responsive overflow */}
          <div className="overflow-y-auto md:overflow-x-auto md:overflow-y-hidden h-[660px]  ">
            <ul className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-3 xl:flex xl:flex-nowrap">
              {testimonials.map((testimonial, index) => (
                <li key={index} className="min-w-max">
                  <figure className="relative rounded-2xl w-[320px] bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                      {truncateText(testimonial.quote, 200)}
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div>
                          <StarRating rating={testimonial.rating} />
                        </div>
                        <div className="font-display text-base text-slate-900">
                          {testimonial.author}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt={testimonial.author}
                          className="h-14 w-14 object-cover"
                          src={testimonial.image}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimoniCards;
