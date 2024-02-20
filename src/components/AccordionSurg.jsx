import React from "react";
import Image from "next/image";

const AccordionSurg = ({ id, title, description, src, alt }) => {
  return (
    <div
      key={id}
      className="md:mx-[144px] mx-2 flex md:flex-row flex-col justify-between font-primary my-6 border-b border-gray-200 pb-6"
    >
      {/* side left */}
      <div className=" flex flex-col md:space-y-16">
        <div className=" space-y-4 my-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-xl font-normal">{description}</p>
        </div>

        <div>
          <button class="bg-red-500 px-[17px] py-[9px] md:my-0 my-6 text-sm rounded-lg text-white transition-transform duration-300 ease-in-out hover:scale-105">
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
          className=" rounded-xl"
        />
      </div>
    </div>
  );
};

export default AccordionSurg;
