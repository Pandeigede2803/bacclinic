import ContactSection from "@/components/ContactSection";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>
          Beauty Clinic Denpasar Bali - BAC Clinic | Contact us
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
