import React from "react";
import Link from "next/link"

const FooterNav = () => {
  return (
    <div className="ml-2  px-4 mt-4">
      <div className=" space-x-10 md:flex md:flex-row  ">
        <div title="Treatment ">
            <h2 className="mb-4">SKIN TREATMENT</h2>
          <ul className="list-disc list-inside space-y-6">
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
        </div>

        <div title="Skin Care">
        <h2 className="mb-4">SKIN CARE PRODUCT</h2>
          <ul className="list-disc list-inside space-y-6">
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
        </div>

        <div title="Promo">
            <h2 className="mb-4">PROMO</h2>
          <ul className="list-disc list-inside space-y-6">
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
        </div>
        {/* Add more AccordionItems here if needed */}
      </div>
    </div>
  );
};

export default FooterNav;
