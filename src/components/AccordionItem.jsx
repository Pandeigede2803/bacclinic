import React, { useState } from "react";
import Link from "next/link";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 px-0 bg-gradient-to-tl from-orange-100 to-orange-50 text-left text-gray-800 font-medium focus:outline-none"
      >
        {title}
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 py-2 bg-gray-100">{children}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="divide-y   divide-gray-200  md:flex md:flex-row">
      <AccordionItem title="Treatment">
        <ul className="list-disc list-inside ">
          <li>
            <Link href="Services/basic-skin-treatment" className=" hover:text-secondary">
            Basic Skin Treatmens
            </Link>
          </li>
          <li>
            <Link href="/chemical-peels" className=" hover:text-secondary">
              Chemical peels
            </Link>
          </li>
          <li>
            <Link href="/Services/skin-resurfacing-by-fsr" className=" hover:text-secondary">
              Skin resurfacing by FSR
            </Link>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Plastic Surgery">
        <ul className="list-disc list-inside">
          <li>
            <Link href="/Services/PlasticSurgery" className=" hover:text-secondary">
              Blepharoplasty
            </Link>
          </li>
          <li>
            <Link href="/Services/PlasticSurgery" className=" hover:text-secondary">
              Breast
            </Link>
          </li>
          <li>
            <Link href="/Services/PlasticSurgery" className=" hover:text-secondary">
              Chin
            </Link>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Promo">
        <ul className="list-disc list-inside">
          <li>
            <Link href="/Promo" className=" hover:text-secondary">
              Skin Care Product
            </Link>
          </li>
          <li>
            <Link href="/Promo" className=" hover:text-secondary">
              Skin Treatment
            </Link>
          </li>
          <li>
            <Link href="/Promo" className=" hover:text-secondary">
              Wajah Tirus
            </Link>
          </li>
        </ul>
      </AccordionItem>
      {/* Add more AccordionItems here if needed */}
    </div>
  );
};

export default Accordion;;;
