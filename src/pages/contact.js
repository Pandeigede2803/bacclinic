import ContactSection from "@/components/ContactSection";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactSection />
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

export default Contact;
