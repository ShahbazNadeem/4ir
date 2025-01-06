import React from "react";
import H5 from "../Typography/H5";
import H6 from "../Typography/H6";
import H3 from "../Typography/H3";
import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";

const Accordian = ({ items, activeIndex, setActiveIndex, key }) => {
  
  const handleClick = () => {
    setActiveIndex(activeIndex === items.id ? null : items.id);
  };

  return (
    <div className="accordion-item" key={key || items.id}>
      <h2 className="accordion-header" id={items.accordianid}>
        <button
          className="accordion-button text-white d-flex justify-content-between align-items-center"
          type="button"
          onClick={handleClick}
          aria-expanded={activeIndex === items.id}
          aria-controls={items.collapseid}
        >
          <div className="d-flex justify-content-between align-items-center">
            <H3 title={items.title} />
            {activeIndex === items.id ? <TiMinus/> : <FiPlus />}
          </div>
        </button>
      </h2>
      <div
        id={items.collapseid}
        className={`accordion-collapse collapse ${
          activeIndex === items.id ? "show" : ""
        }`}
        aria-labelledby={items.accordianid}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <H5 title={items.heading} />
          <ul style={{ color: "white" }}>
            {items.ulitems?.map((ulitem, ulIndex) => (
              <li key={`${items.accordianid}-ulitem-${ulIndex}`}>
                {ulitem.liItems}
              </li>
            ))}
          </ul>
          {items.para1 && <p>{items.para1}</p>}
          <H6 title={items.heading2} />
          {items.para2 && <p>{items.para2}</p>}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
