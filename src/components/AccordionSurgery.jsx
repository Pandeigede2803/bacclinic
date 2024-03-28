import React, { useRef, useEffect, useState } from "react";
import AccordionSurg from "./AccordionSurg";
// Assuming PlasticData is correctly imported from the specified path.
import PlasticData from "./Json/PlasticData";

// Main AccordionSurgery component to display a list of plastic surgery accordions.
const AccordionSurgery = () => {
  // State to keep track of the currently open accordion.
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion's open/close state based on index.
  const toggleAccordion = (index) => {
    // Toggles the open state; if the same index is clicked, it will close.
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Rendering the accordion component by iterating over the plastic surgery data.
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
              description={procedure.description || "No description available."}
              src={procedure.src || "default_image_path.jpg"}
              alt={procedure.alt || "Default Image"}
            />
          ))}
        </AccordionItem>
      ))}
    </div>
  );
};

// Individual AccordionItem component for displaying each accordion item.
const AccordionItem = ({ id, index, title, isOpen, toggleAccordion, children }) => {
  // Using useRef to access the content element of the accordion for dynamic height adjustment.
  const contentRef = useRef(null);
  // State to control the maximum height of the accordion content when expanded or collapsed.
  const [maxHeight, setMaxHeight] = useState("0px");

  // Effect to update content height based on the open/close state.
  useEffect(() => {
    // Adjusts maxHeight to enable CSS transition for expanding and collapsing.
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen, contentRef.current?.scrollHeight]);

  // Rendering each accordion item.
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
          {title}
          <svg
            className={`w-3 h-3 ${isOpen ? "rotate-180" : "rotate-0"} shrink-0`}
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
        style={{ maxHeight: maxHeight }}
        className="accordion-content"
        aria-labelledby={id}
      >
        {children}
      </div>
    </div>
  );
};

// Export the AccordionSurgery component for use elsewhere.
export default AccordionSurgery;
