import React from "react";
import Image from "next/image";
import Navbar from "./Nav";

const Header = () => {
  return (
    // Example JSX
    <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/header1.png?updatedAt=1705582886568')] h-[909px] w-full bg-cover bg-center absolute top-0 bg-opacity-50">
      <div className=" space-y-[60px] flex flex-col justify-center align-middle md:ml-[87px] ml-4 md:my-[195px] my-[95px]">
        <span className=" flex flex-row items-center text-center  ">
          <svg
            width="60"
            height="3"
            viewBox="0 0 60 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-fit w-5"
          >
            <path
              d="M0 1.5C23.2046 1.5 36.2146 1.5 59.4192 1.5"
              stroke="black"
              stroke-width="1.74762"
            />
          </svg>

          <h3 className="ml-4 md:text-[37px] text-[29px] font-primary ">All Beauty In Me</h3>
        </span>
        <h1 className=" text- font-primary md:text-[68px] text-[62px]  flex ">
          BALI AESTHETIC<br></br>CENTRE
        </h1>
        <p className=" font-thin font-secondary md:text-[32px] text-[20px]">
          Bebaskan pesona kecantikanmu <br></br>di klinik Bali Aesthetic Centre
        </p>
        <div className="flex md:flex-row  flex-col space-y-[20px] md:space-y-0.5 w-[270px] md:w-fit  md:space-x-[43px]">
          <button className=" hover:bg-transparent hover:text-black bg-black border-black border text-white font-secondary text-[17px] lg:py-[16px] lg:px-[85px] py-[14px] px-[60px] rounded-[9px]">
            Get Reservation
          </button>
          <button className="hover:bg-black hover:text-white bg-tranparent text-black border-black border  font-secondary text-[17px] lg:py-[16px] lg:px-[85px] py-[14px] px-[60px]  rounded-[9px]">
            Cek Our Catalogue
          </button>
        </div>
      </div>

      {/* Your content here */}
    </div>
  );
};

export default Header;
