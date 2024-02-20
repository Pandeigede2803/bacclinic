import React, { useState } from "react";
import AccordionSurg from "./AccordionSurg";
import SurgeryData from "./Json/SurgeryData";

const AccordionSurgery = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className=" font-primary"
    >
      <AccordionItem
        id="accordion-collapse-heading-1"
        index={0}
        title="LIFTING"
        isOpen={openAccordion === 0}
        toggleAccordion={toggleAccordion}
      >
        {SurgeryData.map((item) => (
          <AccordionSurg
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </AccordionItem>
      <AccordionItem
        id="accordion-collapse-heading-2"
        index={1}
        title="Eyelid Surgery"
        isOpen={openAccordion === 1}
        toggleAccordion={toggleAccordion}
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </AccordionItem>
      <AccordionItem
        id="accordion-collapse-heading-3"
        index={2}
        title="What are the differences between Flowbite and Tailwind UI?"
        isOpen={openAccordion === 2}
        toggleAccordion={toggleAccordion}
      >
        <div className="p-5 border border-t-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-gray-500 list-disc">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </AccordionItem>
    </div>
  );
};

const AccordionItem = ({
  id,
  index,
  title,
  isOpen,
  toggleAccordion,
  children,
}) => {
  return (
    <div id={id}>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          onClick={() => toggleAccordion(index)}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isOpen ? "0" : "180"} shrink-0`}
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
        id={`accordion-collapse-body-${index}`}
        className={isOpen ? "" : "hidden"}
        aria-labelledby={id}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionSurgery;
