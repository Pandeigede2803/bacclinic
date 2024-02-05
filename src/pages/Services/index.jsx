import TreatmentGrid from "@/components/TreatmentGrid";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Services = () => {
  return (
    <div className=" font-primary">
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
