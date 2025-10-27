import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.scss";

const testimonials = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    name: "Esther Howard",
    role: "CEO of Adebe",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Brooklyn Simmons",
    role: "Marketing Manager",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Courtney Henry",
    role: "Product Designer",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="testimonial">
      <div className="testimonial__image">
        <img src={current.image} alt={current.name} />
      </div>

      <div className="testimonial__content">
        <div className="testimonial__header">
          <h2>
            {/* <span className="num">{String(index + 1).padStart(2, "0")}</span>{" "} */}
            <span className="num">04</span>{" "}
            TESTIMONIAL
          </h2>
          <span className="count">
            <span className="count__left">{String(index + 1).padStart(2, "0")}</span>/<span className="count__right">{String(testimonials.length).padStart(2, "0")}</span>
          </span>
        </div>

        <FaQuoteLeft className="quote" />
        <p className="testimonial__text">{current.text}</p>

        <div className="testimonial__author">
          <h4>{current.name}</h4>
          <p>{current.role}</p>
        </div>

        {/* Indicator + Controls */}
        <div className="testimonial__bottom">
          <div className="testimonial__indicators">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={i === index ? "dot active" : "dot"}
              ></span>
            ))}
          </div>

          <div className="testimonial__controls">
            <button onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <button onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
