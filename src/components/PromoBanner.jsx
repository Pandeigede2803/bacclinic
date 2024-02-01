import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';

const PromoBanner = ({ src, alt, link }) => {
  return (
    <div className="relative group w-fit mx-4 md:mx-8 ">
      <Link href={link || '/#'}>
       
          <div className="md:w-auto w-fit ">
            <Image
              src={src}
              alt={alt}
              width={1056}
              height={576}
              className="rounded-xl transition-opacity duration-300 group-hover:opacity-50 w:80"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 w-fill">
              <div className=" bg-black p-4 rounded-full opacity-25">
              <SearchIcon className="text-white text-3xl" />
              </div>
            </div>
          </div>

      </Link>
    </div>
  );
};

export default PromoBanner;