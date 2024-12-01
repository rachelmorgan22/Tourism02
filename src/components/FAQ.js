import React from 'react';
import '../styles/FAQ.css'; // Import your CSS file

const FAQ = () => {
  const faqs = [
    {
      question: "What types of tours do you offer?",
      answer: "We offer a variety of tours including tropical beach excursions, mountain adventures, and cultural journeys."
    },
    {
      question: "How do I book a tour?",
      answer: "You can book a tour directly through our website or by contacting our customer service."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 48 hours in advance will receive a full refund."
    },
    {
      question: "Are meals included in the tours?",
      answer: "Some tours include meals; please check the specific tour details for more information."
    },
    {
      question: "What should I bring on the tours?",
      answer: "We recommend bringing sunscreen, a hat, comfortable clothing, and a camera to capture the memories!"
    }
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
      <div className="faq-contact-info">
        <h2>Need More Help?</h2>
        <p>Contact us at: support@boundlesshorizons.com</p>
      </div>
    </div>
  );
};

export default FAQ;
