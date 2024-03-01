import React, { useRef, useEffect, useState } from "react";
import AccordionSurg from "./AccordionSurg";
import SurgeryData from "./Json/SurgeryData";
import PlasticData from "./Json/PlasticData";

const AccordionSurgery = ({ openAccordion, setOpenAccordion }) => {
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="font-primary">
      {PlasticData.map((category, catIndex) => (
        <AccordionItem
          key={catIndex}
          id={`accordion-collapse-heading-${catIndex}`}
          index={catIndex}
          title={category.category.toUpperCase()}
          isOpen={openAccordion === catIndex}
          toggleAccordion={() => toggleAccordion(catIndex)}
        >
          {category.procedures.map((procedure, procIndex) => (
            <AccordionSurg
              key={procIndex}
              id={`procedure-${catIndex}-${procIndex}`}
              title={procedure.name}
              description={procedure.description ? procedure.description : "No description available."}
              src={procedure.src ? procedure.src : "default_image_path.jpg"}
              alt={procedure.alt ? procedure.alt : "Default Image"}
            />
          ))}
        </AccordionItem>
      ))}
    </div>
  );
};

const AccordionItem = ({ id, index, title, isOpen, toggleAccordion, children }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, contentRef.current?.scrollHeight]);

  return (
    <div id={id}>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-primary gap-3"
          onClick={() => toggleAccordion(index)}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span className="md:mx-[20px]">{title}</span>
          <svg
            className={`w-3 h-3 md:mx-[20px] ${isOpen ? "rotate-180" : "rotate-0"} shrink-0`}
            aria-hidden="true"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div
        ref={contentRef}
        id={`accordion-collapse-body-${index}`}
        className="accordion-content"
        style={{ maxHeight: maxHeight }}
        aria-labelledby={id}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionSurgery;
