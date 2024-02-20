import TreatmentGrid from "@/components/TreatmentGrid";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" font-primary">
      <div className="bg-primary w-full h-[140px] font-primary text-[40px] text-center text-secondary justify-center items-center inline-flex">
        <h1>SERVICES</h1>
      </div>

      <div className="my-4 md:ml-20 ml-4">
        <Link href="/Services" passHref>
          <div className="flex items-center gap-2 text-secondary hover:text-black">
            <IoMdArrowRoundBack size="24px" />
            Back to Services
          </div>
        </Link>
      </div>

      <TreatmentGrid />
      <FloatingWhatsApp
        phoneNumber="6287777939598"
        accountName="BAC CLINIC"
        className="whatsapp-icon"
        avatar="https://ik.imagekit.io/m1akscp5q/logo%20bac%20vertikal.png?updatedAt=1706761240275"
        chatMessage="Hello there! 🤝 How can we help?"
      />
    </div>
  );
};

export default Services;
