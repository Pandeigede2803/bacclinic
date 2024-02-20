import React from "react";
import PromoCards from "@/components/PromoCards";
import PromoDataPage from "@/components/Json/PromoDataPage";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Promo = () => {
  return (
    <div>
      <div className="bg-primary w-full h-[140px] font-primary text-[40px] text-center text-secondary justify-center items-center inline-flex">
        <h1>PROMO</h1>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 m-10 bg-primary p-8 ">
        {PromoDataPage.map((promo) => (
          <PromoCards
            link={promo.link}
            key={promo.id}
            imageUrl={promo.imageUrl}
            title={promo.title}
            content={promo.content}
          />
        ))}
      </div>
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

export default Promo;
