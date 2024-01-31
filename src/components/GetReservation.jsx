import React from "react";
import Image from "next/image";

const GetReservation = () => {
  return (
    <div className=" my-12 flex md:flex-row flex-col mx-auto font-primary space-y-4">
      <Image
        src="https://ik.imagekit.io/m1akscp5q/A7202798.jpeg?updatedAt=1706511949190"
        width={600}
        height={400}
        alt="get reservation"
      ></Image>

      <div className=" flex flex-col md:space-y-20">
        <h1 className=" font-bold text-2xl mx-auto">GET RESERVATION NOW!</h1>
        <p className=" text-justify mx-10">
          Kami di Bali Aesthetic Centre percaya bahwa kecantikan adalah
          perjalanan, bukan hanya tujuan.<br></br>
          <br></br> Setiap langkah yang Anda ambil bersama kami adalah langkah
          menuju versi terbaik dari diri Anda. <br></br>
        </p>
        <button className=" mt-12 md:mx-auto justify-start hover:bg-black hover:text-white bg-tranpasarent hover:shadow-xl border-black border text-black font-secondary text-[17px] lg:py-[16px] lg:px-[85px] py-[14px] px-[30px] rounded-[9px] mx-10">
          Get Reservation
        </button>
      </div>
    </div>
  );
};

export default GetReservation;
