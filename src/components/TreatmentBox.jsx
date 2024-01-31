import React from "react";

const TreatmentBox = ({ title, description }) => {
  return (
    <div className="md:w-[509px] w-[320px] font-primary h-[308px] px-[49px] py-[41px] bg-white rounded-[20px] border border-secondary hover:shadow-sm hover:shadow-black flex-col justify-start items-start gap-[7px] inline-flex transition duration-300 ease-in-out hover:scale-105">
      <div className="flex-col justify-start items-start gap-[15px] flex">
        <div className="text-stone-500 text-2xl font-normal leading-relaxed">
          {title}
        </div>
        <div className="w-fit text-black md:text-xl text-md font-normal leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default TreatmentBox;
