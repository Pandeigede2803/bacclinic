import React from 'react';
import Head from 'next/head';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
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
import Form from '@/components/Form';
import Article from '@/components/Article';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bali Aesthetic Centre - BAC Clinic | Beauty Clinic Bali and Plastic Surgery</title>
        <meta name="description" content="BAC Clinic adalah pilihan terbaik untuk perawatan estetika di Denpasar, Bali. Dengan teknologi terkini, kami menawarkan layanan Botox, filler, terapi kulit, dan banyak lagi untuk membantu Anda tampil percaya diri." />
        <meta property="og:title" content="Bali Aesthetic Centre - BAC Clinic | Perawatan Estetika Terdepan" />
        <meta name="keywords" content="Beauty Clinic Denpasar,Bali Aesthetic Centre,Bali Aesthetic Centre, Klinik kecantikan terdekat, Klinik kecantikan denpasar, Klinik kecantikan Bali, Nearest Beauty Clinic, BAC Clinic Bali, Perawatan Estetika,Aesthetic Treatments, Skin Treatments, Dermatology, Aesthetic Clinic,  Botox, Filler, Terapi Kulit, Klinik Kecantikan di Bali, Facial termurah diBali, Facial terdekat " />
        <meta property="og:description" content="BAC Clinic adalah pilihan terbaik untuk perawatan estetika di Denpasar, Bali. Dengan teknologi terkini, kami menawarkan layanan Botox, filler, terapi kulit, dan banyak lagi untuk membantu Anda tampil percaya diri." />
        <meta property="og:url" content="https://bacclinic.id" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ik.imagekit.io/m1akscp5q/background%20image.png?updatedAt=1707296969772" />
        <link rel="canonical" href="https://bacclinic.id" />
      </Head>
      <main>
        <div>
          <Header />
        </div>
        {/* Lanjutkan dengan komponen lainnya */}
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
      <div>
        <Article/>

      </div>
        {/* Sisipkan semua komponen lain seperti yang telah kamu definisikan */}
        <FloatingWhatsApp
          phoneNumber="6287777939598"
          accountName="BAC CLINIC"
          className="whatsapp-icon"
          avatar="https://ik.imagekit.io/m1akscp5q/logo%20bac%20vertikal.png?updatedAt=1706761240275"
          chatMessage="Hello there! 🤝 How can we help?"
        />

       
      </main>
    </>
  );
}
