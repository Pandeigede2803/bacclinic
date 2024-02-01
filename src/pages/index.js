import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import Image from "next/image";
import CustomLinkComponent from "@/components/CustomLinkComponent";
import Header from "@/components/Header";
import SliderCards from "@/components/SliderCards";
import PromoBanner from "@/components/PromoBanner";
import PromoSection from "@/components/PromoSection";
import WhySection from "@/components/WhySection";
import Motivation from "@/components/Motivation";
import Testimoni from "@/components/Testimoni";
import GetReservation from "@/components/GetReservation";
import ProductCard from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {

  return (
    <main>
      <div className="">
        <Header />
      </div>
      <div className="mt-[909px]">
        <SliderCards />
      </div>
      <div>
        <PromoSection />
      </div>
      <div>
        <GetReservation />
      </div>
      <div>
        <WhySection />
      </div>

      <div>
        <Motivation />
      </div>
      <div>
        <Testimoni />
      </div>
      <div>
      <ProductGrid/>
      </div>
      <FloatingWhatsApp
        phoneNumber="6287777939598"
        accountName="BAC CLINIC"
        className="whatsapp-icon"
        avatar="https://ik.imagekit.io/m1akscp5q/logo%20bac%20vertikal.png?updatedAt=1706761240275"
        chatMessage="Hello there! 🤝 How can we help?"
      />
    </main>
  );
}