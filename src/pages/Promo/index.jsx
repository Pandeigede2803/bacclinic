import React from "react";
import PromoCards from "@/components/PromoCards";
import PromoDataPage from "@/components/PromoDataPage"

const Promo = () => {
  return (
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
  );
};

export default Promo;