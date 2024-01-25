import Image from "next/image";

import CustomLinkComponent from "@/components/CustomLinkComponent";
import Header from "@/components/Header";
import SliderCards from "@/components/SliderCards";
import PromoBanner from "@/components/PromoBanner";
import PromoSection from "@/components/PromoSection";
import WhySection from "@/components/WhySection";


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
        <PromoSection/>
      </div>
      <div>
        <WhySection/>
      </div>
    </main>
  );
}
