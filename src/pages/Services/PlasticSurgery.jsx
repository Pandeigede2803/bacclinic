import Image from "next/image"; // Pastikan menggunakan 'next/image' bukan 'next/link'
import ButtonPlastic from "@/components/ButtonPlastic";
import PlasticData from "@/components/Json/PlasticData";
import AccordionSurg from "@/components/AccordionSurg";
import SurgeryData from "@/components/Json/SurgeryData";
import AccordionSurgery from "@/components/AccordionSurgery";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import Head from "next/head";
import React, { useState } from "react";

const PlasticSurgery = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const metaKeywords = PlasticData.map((category) => {
    return category.procedures.map((procedure) => {
      return procedure.name;
    });
  })
    .flat()
    .join(", ");

  const handleOpenAccordion = (index) => {
    // setOpenAccordion from AccordionSurgery's state
    setOpenAccordion(index);
  };

  return (
    <>
      <Head>
        <title>Beauty Clinic Denpasar Bali - BAC Clinic | PLastic Surgery</title>
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
          content={`Beauty Clinic Denpasar, Klinik kecantikan terdekat, Klinik kecantikan denpasar, Klinik kecantikan Bali, Nearest Beauty Clinic, BAC Clinic Bali, Perawatan Estetika, Aesthetic Treatments, Skin Treatments, Dermatology, Aesthetic Clinic, Botox, Filler, Terapi Kulit, Klinik Kecantikan di Bali, Facial termurah diBali, Facial terdekat, ${metaKeywords}`}
        />
        <meta
          property="og:description"
          content="BAC Clinic adalah pilihan terbaik untuk perawatan estetika di Denpasar, Bali. Dengan teknologi terkini, kami menawarkan layanan Botox, filler, terapi kulit, dan banyak lagi untuk membantu Anda tampil percaya diri."
        />
        <meta property="og:url" content="https://bacclinic.id" />
        <meta property="og:type" content="website" ></meta>
        <meta
          property="og:image"
          content="https://ik.imagekit.io/m1akscp5q/background%20image.png?updatedAt=1707296969772"
        />
        <link rel="canonical" href="https://bacclinic.id" />
      </Head>

      <div className=" flex flex-col justify-start">
        <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/Frame%2023.png?updatedAt=1708410674636')]   bg-cover bg-center w-full h-[256px] font-primary text-[40px] my-0 text-center text-white justify-center   inline-flex">
          <h1 className=" text-center my-auto">PLASTIC SURGERY</h1>
        </div>

        <div className="my-10">
          <Link href="/Services" passHref>
            <div className="flex items-center gap-2 text-secondary hover:text-black">
              <IoMdArrowRoundBack size="24px" />
              Back to Services
            </div>
          </Link>
        </div>

        <div>
        <header className=" font-primary flex flex-col mx-auto text-center justify-center my-10 space-y-10">
        <h1 className=" text-3xl">Plastic Surgery Catalog</h1>
        <p className=" text-xl">Embark on a journey of transformation with our comprehensive guide to cosmetic enhancement. Discover the possibilities and empower your beauty with Bali Aesthetic Centre. Explore with confidence, knowing that each procedure is a blend of artistry and precision, tailored to your unique desires and needs.</p>
      </header>
          <div className="mb-32 flex flex-row overflow-x-auto lg:w-full w-full ">
            {PlasticData.map((data, index) => (
              <div key={index}>
                <ButtonPlastic
                  text={data.category}
                  scrollToId={`accordion-collapse-heading-${index}`}
                  onButtonClick={() => handleOpenAccordion(index)}
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <AccordionSurgery
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlasticSurgery;;

{
  /* Search */
}
{
  /* <div className="flex  mt-20    flex-row  justify-start">
          <form className=" flex flex-row   font-primary">
            <input
              className="p-2 m-2 md:w-[800px] w-full border  border-black rounded-2xl" // padding 10px, margin 10px, width 80%
              type="text"
              name="search"
              placeholder="Search for treatments"
            />
            <button
              className="p-2 m-2 bg-secondary rounded-2xl px-12 hover:bg-black  text-white border-none cursor-pointer" // padding 10px, margin 10px, background red, text white
              type="submit"
            >
              Search
            </button>
          </form>
        </div> */
}
