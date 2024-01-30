import React from "react";
import Image from "next/image";
import TreatmentBox from "@/components/TreatmentBox";

const SinglePage = ({
  pageTitle,
  imageSrc,
  videoUrl,
  benefitsList,
  treatments,
}) => {
  return (
    <div>
      <div className="bg-primary w-full h-[256px] font-primary text-[40px] text-center text-secondary justify-center items-center inline-flex">
        <h1>{pageTitle}</h1>
      </div>

      <div>
        <Image
          src={imageSrc}
          width={4320}
          height={1210}
          className="w-full"
          alt="Treatment image"
        />
      </div>

      <div className="my-8 justify-center flex items-center">
        <iframe
          width="1103"
          height="555"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: "100%" }}
        ></iframe>
      </div>

      <div className="md:mx-auto my-12 mx-10 md:w-[1107px] w-[320px] h-auto  flex-col justify-center items-start font-primary ">
        <h1 className="text-stone-500 md:text-[40px] text-[20px] font-normal ">
          MANFAAT
        </h1>
        <ul className="w-fit text-black md:text-[25px] text-[15px] font-normal leading-[55px] list-disc list-inside">
          {benefitsList.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {treatments.map((treatment, index) => (
            <TreatmentBox
              key={index}
              title={treatment.title}
              description={treatment.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
