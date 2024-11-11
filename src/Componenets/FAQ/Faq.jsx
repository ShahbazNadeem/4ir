import React, { useState } from "react";

const FAQ = ({ Faq, circleData }) => {
  // Set the initial active index to the first item's toggleId if Faq has items
  const [activeIndex, setActiveIndex] = useState(Faq.length > 0 ? Faq[0].toggleId : null);

  // Toggle function to handle which FAQ item is expanded
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing the FAQ
  };

  return (
    <>
      <div className="col-lg-6">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {Faq.map((items) => {
            return (
              <div className="accordion-item" key={items.id}>
                <h2 className="accordion-header" id={items.targetId}>
                  <button
                    data-cursor="pointer"
                    className={`accordion-button ${
                      activeIndex === items.toggleId ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleFAQ(items.toggleId)} // Use React to handle the toggle
                    aria-expanded={activeIndex === items.toggleId ? "true" : "false"}
                    aria-controls={items.ariaControls}
                  >
                    {items.title}
                  </button>
                </h2>
                <div
                  id={items.ariaControls}
                  className={`accordion-collapse collapse ${
                    activeIndex === items.toggleId ? "show" : ""
                  }`}
                  aria-labelledby={items.targetId}
                >
                  <div className="accordion-body">{items.showtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-lg-6 circles active">
        {circleData.map((items) => {
          return (
            <div
              key={items.label}
              className={`circle ${activeIndex === items.toggleId ? "circle-active" : ""}`}
              onClick={() => toggleFAQ(items.toggleId)}
            >
              <span>{items.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FAQ;
