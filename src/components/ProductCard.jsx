import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ src, title, alt, id, link }) => {
  return (
    <div  key={id} className="font-primary relative group mx-4 my-10 transition duration-300 ease-in-out transform hover:scale-110">
      <Link href={link}>
        <div aria-label={title}> {/* Added for accessibility and to ensure proper anchor tag usage */}
          <div className="relative">
            <Image
              src={src}
              width={303}
              height={303}
              alt={alt}
              className="transition-opacity duration-300 rounded-lg"
            />
            {/* Overlay with icon */}
            <div className="w-full p-4 rounded-lg absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
              <AiOutlineShoppingCart className="text-white text-3xl opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </Link>

      <h3 className="mt-2">{title}</h3>
    </div>
  );
};

export default ProductCard;
