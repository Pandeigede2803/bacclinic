import React from "react";
import Link from "next/link";

const FooterNav = () => {
  return (
    <div className="mx-auto  px-4 mt-4">
      <div className=" space-x-20 md:flex md:flex-row  ">
        <div title="Treatment ">
          <h2 className="mb-4">SKIN TREATMENT</h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <Link
                href="Services/basic-skin-treatment"
                className=" hover:text-secondary"
              >
                Basic Skin Treatmens{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/Services/chemical-peeling"
                className=" hover:text-secondary"
              >
                Chemical peels
              </Link>
            </li>
            <li>
              <Link
                href="/Services/skin-resurfacing-by-fsr"
                className=" hover:text-secondary"
              >
                Skin Resurfacing
              </Link>
            </li>
          </ul>
        </div>

        <div title="Skin Care">
          <h2 className="mb-4">PLASTIC SURGERY</h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <Link
                href="/Services/PlasticSurgery"
                className=" hover:text-secondary"
              >
                Blepharoplasty
              </Link>
            </li>
            <li>
              <Link
                href="/Services/PlasticSurgery"
                className=" hover:text-secondary"
              >
                Breast
              </Link>
            </li>
            <li>
              <Link
                href="/Services/PlasticSurgery"
                className=" hover:text-secondary"
              >
                Chin
              </Link>
            </li>
          </ul>
        </div>

        <div title="Promo">
          <h2 className="mb-4">PROMO</h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <Link href="/Promo" className=" hover:text-secondary">
                Skin Care 
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
        </div>
        {/* Add more AccordionItems here if needed */}
      </div>
    </div>
  );
};

export default FooterNav;
