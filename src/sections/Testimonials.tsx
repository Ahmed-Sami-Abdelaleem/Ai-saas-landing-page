"use client";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section>
      <div className="container relative">
        <FontAwesomeIcon
          className="absolute -top-2 left-2  lg:left-6  size-4"
          icon={faPlus}
        />

        {/* Top Right Plus Icon */}
        <FontAwesomeIcon
          className="absolute -top-2 right-2 lg:right-6  size-4"
          icon={faPlus}
        />
        <div className="border-l border-r border-t border-[var(--color-border)] overflow-hidden py-12">
          <div className="relative">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="size-12 text-violet-400 absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 z-10"
            />
          </div>
          <div className="relative mx-6 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]  ">
            <div className=" mx-6 justify-center my-9 md:flex md:flex-row md:gap-16">
              {testimonials.map((testimonial, index) => (
                <>
                  {index === currentTestimonial && (
                    <blockquote
                      key={testimonial.name}
                      className="flex flex-col  gap-20 md:flex-row "
                    >
                      <p className="text-xl font-medium flex-1">
                        {testimonial.quote}
                      </p>
                      <cite className="not-italic">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="rounded-xl size-28"
                        />
                        <div className="font-bold mt-4">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.title}
                        </div>
                      </cite>
                    </blockquote>
                  )}
                </>
              ))}
              <div className="flex md:flex-col justify-center gap-2 mt-24 lg:mt-12">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer" // Added cursor-pointer for better UX
                    onClick={() => setCurrentTestimonial(index)} // Update the state on click
                  >
                    {index === currentTestimonial && (
                      <div className="rounded-full absolute size-6 border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"></div>
                    )}
                    <div className="size-1.5 bg-gray-200 rounded-full z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
