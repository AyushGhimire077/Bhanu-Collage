import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What programs does Bhanu College offer?",
      answer: "We offer comprehensive plus two (10+2) programs in both Science and Commerce."
    },
    {
      question: "How can I contact Bhanu College?",
      answer: "You can reach us at +977 9810534413 or bhanucollage@gmail.com."
    },
    {
      question: "When was Bhanu College established?",
      answer: "Bhanu College was established in 2005."
    },
    {
      question: "Is Bhanu College affiliated with any educational board?",
      answer: "Yes, we are affiliated with the National Examination Board (NEB)."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
  <>
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <hr/>
    </>
  );
};

export default FAQ;
