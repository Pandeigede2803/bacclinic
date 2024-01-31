import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const CardsTreatment = ({ src, title, alt, id, slug }) => {
  return (
    <div id={id} className="font-primary relative group mx-4 ">
      <Link href={`/Services/${slug}`}>
        <div className="relative">
          <Image
            src={src}
            width={303}
            height={303}
            alt={alt}
            className="transition-opacity duration-300 "
          />
          {/* Overlay with icon */}
          <div className="w-fill   p-4 rounded-lg absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
            <SearchIcon className="text-white text-3xl opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      </Link>

      <h3 className="mt-2">{title}</h3>
    </div>
  );
};

export default CardsTreatment;
