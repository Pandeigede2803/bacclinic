import GetReservation from "@/components/GetReservation";
import React from "react";
import CtaSection from "@/components/ctaSection";
import Image from "next/image";
import VisionMissionSection from "@/components/VisionAndMission";
import VideoAbout from "@/components/VideoAbout";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>
          Bali Aesthetic Centre - BAC Clinic | Beauty Clinic Bali and Plastic Surgery | About
        </title>
        <meta
          name="description"
          content="BAC Clinic adalah pilihan terbaik untuk perawatan estetika di Denpasar, Bali. Dengan teknologi terkini, kami menawarkan layanan Botox, filler, terapi kulit, dan banyak lagi untuk membantu Anda tampil percaya diri."
        />
        <meta
          property="og:title"
          content="Beauty Clinic Denpasar Bali - BAC Clinic | Perawatan Estetika Terdepan"
        />
        <meta
          name="keywords"
          content="Beauty Clinic Denpasar,Klinik kecantikan terdekat, Klinik kecantikan denpasar, Klinik kecantikan Bali, Nearest Beauty Clinic, BAC Clinic Bali, Perawatan Estetika,Aesthetic Treatments, Skin Treatments, Dermatology, Aesthetic Clinic,  Botox, Filler, Terapi Kulit, Klinik Kecantikan di Bali, Facial termurah diBali, Facial terdekat "
        />
        <meta
          property="og:description"
          content="BAC Clinic adalah pilihan terbaik untuk perawatan estetika di Denpasar, Bali. Dengan teknologi terkini, kami menawarkan layanan Botox, filler, terapi kulit, dan banyak lagi untuk membantu Anda tampil percaya diri."
        />
        <meta property="og:url" content="https://bacclinic.id" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/m1akscp5q/background%20image.png?updatedAt=1707296969772"
        />
        <link rel="canonical" href="https://bacclinic.id" />
      </Head>

      <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/wallpaper%20about.png?updatedAt=1706763245494')]   bg-cover bg-center w-full h-[256px] font-primary text-[40px] my-0 text-center text-white justify-center   inline-flex">
        <h1 className=" text-center my-auto">ABOUT US</h1>
      </div>
      <div className="">
        <VideoAbout />
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 ">
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
