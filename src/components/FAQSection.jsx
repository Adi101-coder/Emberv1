import React, { useState } from "react";
import "../stylesheets/FAQSection.css";

const faqs = [
  {
    question: "What is Ember?",
    answer:
      "Ember is a free streaming platform that lets you watch movies and series instantly, across all your devices. No signup, no fees, just stream!"
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account or signup is required. Simply visit Ember and start watching your favorite content right away."
  },
  {
    question: "Is Ember really free?",
    answer:
      "Yes! Ember is 100% free to use. There are no subscriptions, no hidden charges, and no credit card required."
  },
  {
    question: "What devices can I use to watch?",
    answer:
      "You can enjoy Ember on your smartphone, tablet, laptop, desktop, and smart TV. Our platform is designed for seamless streaming everywhere."
  },
  {
    question: "Is there an app for Ember?",
    answer:
      "Currently, Ember is available as a web app. You can access it from any modern browser. Stay tuned for future app releases!"
  },
  {
    question: "Is Ember safe and legal?",
    answer:
      "Ember aggregates links from public sources. We recommend users check the legality of streaming in their region and use the platform responsibly."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, idx) => (
          <div className={`faq-item${openIndex === idx ? " open" : ""}`} key={faq.question}>
            <button className="faq-question" onClick={() => toggleFAQ(idx)}>
              <span>{faq.question}</span>
              <span className="faq-toggle-icon">{openIndex === idx ? "−" : "+"}</span>
            </button>
            <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === idx ? '220px' : '0px' }}>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 