import Image from "next/image";

import CustomLinkComponent from "@/components/CustomLinkComponent";
import Header from "@/components/Header";
import SliderCards from "@/components/SliderCards";
import PromoBanner from "@/components/PromoBanner";
import PromoSection from "@/components/PromoSection";
import WhySection from "@/components/WhySection";
import Motivation from "@/components/Motivation";
import Testimoni from "@/components/Testimoni";


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

      <div>
        <Motivation/>
      </div>
      <div>
        <Testimoni/>
      </div>
    </main>
  );
}
