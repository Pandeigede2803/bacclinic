import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const PromoCards = ({ imageUrl, title, alt, link }) => {
  return (
    <div>
      <div className="w-auto relative overflow-hidden transition  transform hover:scale-105">
        <Link href={link} target="blank">
          <div>
            <Image
              src={imageUrl}
              alt={alt}
              width={1080}
              height={1920}
              className="rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity rounded-xl hover:bg-black opacity-0 hover:opacity-80 ">
              <div className=" absolute inset-0 rounded-xl  "></div>
              {/* <IoSearch className="text-white text-4xl" /> */}
               <h2 className="text-white absolute font-primary">I WANT THIS</h2>
            </div>
           
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PromoCards;
