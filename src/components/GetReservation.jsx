import React from "react";
import Image from "next/image";
import Link from "next/link";

const GetReservation = () => {
  return (
    <div className=" my-12 flex md:flex-col lg:flex-row  flex-col mx-auto justify-center items-center font-primary ">
      <Image
        src="https://ik.imagekit.io/m1akscp5q/A7202798.jpeg?updatedAt=1706511949190"
        width={600}
        height={400}
        className="md:w-5/6 lg:w-1/2"
        alt="get reservation"
      ></Image>

      <div className="md:w-3/4 lg:w-1/2 flex items-center justify-center align-middle mt-10 md:mt-4  flex-col md:space-y-20">
        <h1 className=" font-bold mt-4 lg:mt-0 text-2xl mx-auto">GET RESERVATION NOW!</h1>
        <p className=" md:text-2xl text-justify mx-10">
          At Bali Aesthetic Centre, we believe that beauty is a journey, not
          just a destination.<br></br>
          <br></br>Every step you take with us is a step towards the best version of yourself.<br></br>
        </p>
        <Link href="https://wa.me/6287777939598" target="_blank">
          <button className=" md:mt-2   mt-12 md:mx-auto justify-start hover:bg-black hover:text-white bg-tranpasarent hover:shadow-xl border-black border text-black font-secondary text-[17px] lg:py-[16px] lg:px-[85px] py-[14px] px-[30px] rounded-[9px] mx-10">
            Get Reservation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetReservation;
