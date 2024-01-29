import React, { useState } from "react";
import Link from "next/link";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 px-0 bg-white text-left text-gray-800 font-medium focus:outline-none"
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
    <div className="divide-y divide-gray-200  md:flex md:flex-row">
      <AccordionItem title="Treatment">
        <ul className="list-disc list-inside">
          <li>
            <Link href="/facials" className=" hover:text-secondary">
              Facials
            </Link>
          </li>
          <li>
            <Link href="/chemical-peels" className=" hover:text-secondary">
              Chemical peels
            </Link>
          </li>
          <li>
            <Link href="/laser-treatment" className=" hover:text-secondary">
              Laser treatment
            </Link>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Skin Care">
        <ul className="list-disc list-inside">
          <li>
            <Link href="/moisturizers" className=" hover:text-secondary">
              Moisturizers
            </Link>
          </li>
          <li>
            <Link href="/cleansers" className=" hover:text-secondary">
              Cleansers
            </Link>
          </li>
          <li>
            <Link href="/sunscreens" className=" hover:text-secondary">
              Sunscreens
            </Link>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Promo">
        <ul className="list-disc list-inside">
          <li>
            <Link href="/skin-care-product" className=" hover:text-secondary">
              Skin Care Product
            </Link>
          </li>
          <li>
            <Link href="/treatment" className=" hover:text-secondary">
              Treatment
            </Link>
          </li>
          <li>
            <Link href="/consultation" className=" hover:text-secondary">
              Consultation
            </Link>
          </li>
        </ul>
      </AccordionItem>
      {/* Add more AccordionItems here if needed */}
    </div>
  );
};

export default Accordion;
