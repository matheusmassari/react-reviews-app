import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const next = () => {
    setIndex((atual) => {
      const number = atual + 1;
      return validateIndex(number);
    });
  };

  const previous = () => {
    setIndex((atual) => {
      const number = atual - 1;
      return validateIndex(number);
    });
  };

  const validateIndex = (number) => {
    if (number >= 4) {
      return 0;
    }
    if (number <= 0) {
      return 3;
    }
    return number;
  };

  const random = () => {
      let random = Math.floor(Math.random() * people.length)
      if(random === index) {
          random = index + 1
      }
      setIndex(validateIndex(random))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={() => previous()} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => next()} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={() => random()} className="random-btn">Aleatório</button>
    </article>
  );
}

export default Review;
