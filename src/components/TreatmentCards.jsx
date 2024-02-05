import React from "react";
import Image from "next/image";
import Link from "next/link";

const TreatmentCards = ({id, imageUrl, title, content,slug,alt }) => {
  return (
    <div key={id} className="w-[325px] h-[550px] relative font-primary transition duration-300 ease-in-out transform hover:scale-105">
      <div className="w-[296px] h-[250px] left-[18px] top-[296px] absolute bg-stone-300 bg-opacity-80 rounded-lg blur-[36px]" />
      <div className="w-[325px] h-[274px] left-0 top-[276px] absolute bg-white rounded-lg" />
      <Link href={`/Services/${slug}`}>
      <button className="w-[277px] h-[55px] py-4 left-[24px] text-white hover:text-black top-[471px]  absolute hover:shadow-md hover:shadow-black bg-secondary hover:bg-primary rounded-lg justify-center items-center inline-flex">
        <div className="text-center   text-base font-bold leading-snug">
         GET DETAILS
        </div>
      </button>
      </Link>
      <div className="h-[126px] left-[24px] top-[321px] absolute">
        <div className="w-[277px] mt-2 h-[91px] left-0 top-[35px] absolute text-neutral-600 text-base font-normal leading-snug">
          {content}
        </div>
        <div className="left-0 top-0 text-stone-500 text-2xl font-normal leading-relaxed">
          {title}
        </div>
      </div>
      <Image
        className="w-[325px] h-[297px] left-0 top-0 absolute rounded-tl-lg rounded-tr-lg"
        src={imageUrl}
        width={1216}
        height={1217}
        alt={alt}
      />
    </div>
  );
};


export default TreatmentCards;;;;
