import React from "react";
import Image from "next/image"

const AccordionSurg = ({ id,title,description,src,alt}) => {
  return (
    <div key={id} className="mx-[144px] flex flex-row justify-between font-primary my-6">

      {/* side left */}
      <div className=" flex flex-col space-y-16">
        <div className=" space-y-4 my-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-xl font-normal">
          {description}
          </p>
        </div>

        <div>
          <button className=" bg-red-500 px-[17px] py-[9px] text-sm rounded-lg text-white">
            Get Consultation
          </button>
        </div>


      </div>

      {/* side right image */}

      <div>
        <Image
        src={src}
        alt={alt}
        width={344}
        height={184}
        className=" rounded-xl"/>
      </div>
    </div>
  );
};

export default AccordionSurg;
