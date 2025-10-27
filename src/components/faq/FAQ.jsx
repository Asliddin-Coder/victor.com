import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const data = [
  {
    question: "Where Can I Find More Information?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    question: "What Kinds of Payment Do You Accept?",
    answer:
      "We accept PayPal, Visa, MasterCard, and other major credit cards. All payments are processed securely.",
  },
  {
    question: "What Are Your Terms and Conditions?",
    answer:
      "Please refer to our Terms and Conditions page for detailed information about your rights and obligations.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span>03</span> Have Any Questions?
        </h2>
        <hr className={styles.line} />
        <div className={styles.items}>
          {data.map((item, index) => (
            <div key={index} className={styles.item}>
              <div
                className={`${styles.question} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => toggle(index)}
              >
                {item.question}
                <span>{activeIndex === index ? <FaChevronDown /> : <FaChevronUp /> }</span>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
