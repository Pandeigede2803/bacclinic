import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div>
      <section className="relative bg-black  w-full opacity-100">
        <div className="  "></div>
        <Image
          src="https://ik.imagekit.io/m1akscp5q/CTA%20section.png?updatedAt=1706856422063"
          width={2880}
          height={1068}
          className=""
        />
   
        <div className=" absolute inset-0 flex flex-col justify-center items-center space-y-1">
          <h1 className=" my-2 font-primary text-white text-center md:text-[56px]">
            HAVE A RESERVATION NOW <br></br> GET SPECIAL OFFERING
          </h1>
          <Link href="https://wa.me/6287777939598">
          <button className="w-[200px] md:w-[275px] md:h-[55px] h-[40px] px-10 py-4 text-white hover:text-secondary bg-secondary hover:bg-primary rounded-lg justify-center items-center inline-flex transition duration-300 ease-in-out hover:scale-110">
            <div className=" text-base font-bold font-secondary leading-snug">
              BOOK NOW
            </div>
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
