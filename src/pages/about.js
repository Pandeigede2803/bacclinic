import GetReservation from "@/components/GetReservation";
import React from "react";
import CtaSection from "@/components/ctaSection";
import Image from "next/image";
import VisionMissionSection from "@/components/VisionAndMission";
import VideoAbout from "@/components/VideoAbout";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const about = () => {
  return (
    <div>
      <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/wallpaper%20about.png?updatedAt=1706763245494')]   bg-cover bg-center w-full h-[256px] font-primary text-[40px] my-0 text-center text-white justify-center   inline-flex">
        <h1 className=" text-center my-auto">ABOUT US</h1>
      </div>
      <div className=""><VideoAbout/></div>
      <div className=" grid md:grid-cols-2 grid-cols-1 ">
        <div className=" bg-red-300">
          <Image
            src={
              "https://ik.imagekit.io/m1akscp5q/ABoute%20image.png?updatedAt=1706764562714"
            }
            width={720}
            height={899}
            className="justify-start w-full"
          />
        </div>
        <div className=" font-primary mx-6 md:my-auto my-2 text-2xl ">
          <VisionMissionSection />

          {/* add vision and mission now */}
        </div>
      </div>
      <div className=" mt-0">
        <CtaSection />
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

export default about;
