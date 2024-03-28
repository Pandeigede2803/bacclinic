import React, { useState } from "react";
import AccordionSurg from "./AccordionSurg";
import PlasticData from "./Json/PlasticData";

// Komponen AccordionSurgery utama
const AccordionSurgery = () => {
  // Menginisialisasi state dengan array kosong untuk menampung indeks-indeks aksordion yang terbuka
  const [openAccordion, setOpenAccordion] = useState([]);

  // Fungsi untuk mengubah status terbuka/tutup aksordion
  const toggleAccordion = (index) => {
    if (openAccordion.includes(index)) {
      // Jika index sudah ada di dalam array, menghapusnya (menutup aksordion)
      setOpenAccordion(openAccordion.filter(i => i !== index));
    } else {
      // Jika tidak, menambahkannya ke dalam array (membuka aksordion)
      setOpenAccordion([...openAccordion, index]);
    }
  };

  // Render komponen AccordionSurgery
  return (
    <div id="accordion-collapse" data-accordion="collapse" className="font-primary">
      {PlasticData.map((category, catIndex) => (
        <AccordionItem
          key={catIndex}
          id={`accordion-collapse-heading-${catIndex}`}
          index={catIndex}
          title={category.category.toUpperCase()}
          isOpen={openAccordion.includes(catIndex)} // Menentukan apakah aksordion ini terbuka
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

// Komponen AccordionItem individual
const AccordionItem = ({ id, index, title, isOpen, toggleAccordion, children }) => {
  return (
    <div id={id}>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-primary gap-3"
          onClick={toggleAccordion}
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
        id={`accordion-collapse-body-${index}`}
        className={`accordion-content ${isOpen ? "block" : "hidden"}`}
        aria-labelledby={id}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionSurgery;
