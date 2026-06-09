import { useState, useRef } from "react";
import "../styles/faqs.css";
import SplitTextAnimate from "../components/SplitTextAnimate";

const faqData = [
  {
    question: "What services does WMT Films offer?",
    answer:
      "WMT Films specializes in corporate films, advertising films, brand storytelling and high-end digital video production.",
  },
  {
    question: "Do you manage the entire production process?",
    answer:
      "Yes. From ideation and scripting to shooting, editing and final delivery, we handle the full production pipeline.",
  },
  {
    question: "How long does a corporate film take to produce?",
    answer:
      "Depending on the project scope, most corporate or brand films are completed within 2–6 weeks.",
  },
  {
    question: "Do you work with startups and agencies?",
    answer:
      "Yes. We collaborate with startups, brands, agencies and enterprises to craft compelling visual stories.",
  },
  {
    question: "How can I start a project with WMT Films?",
    answer:
      "You can contact us through the contact form on this website. Our team will reach out to discuss your project.",
  },
];

const Faqs = () => {
  const [active, setActive] = useState(null);
  const refs = useRef([]);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="outline-heading outline-black">
            <SplitTextAnimate text="FAQs" />
          </h2>

          <p>
            <SplitTextAnimate text="Everything you may want to know." />
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggle(index)}>
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{faq.question}</h3>

                <span className="faq-arrow">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>

              <div
                ref={(el) => (refs.current[index] = el)}
                className="faq-answer"
                style={{
                  height:
                    active === index
                      ? refs.current[index]?.scrollHeight + "px"
                      : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
