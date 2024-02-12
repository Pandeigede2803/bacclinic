import React from "react";
import ProductCard from "./ProductCard";
import ProductData from "@/components/Json/ProductData"; // Ensure this is an array of objects

const ProductGrid = () => {
  return (
    <div className=" font-primary">
      <h1 className=" text-center mt-10  text-2xl">SKINCARE PRODUCT</h1>
      <div className="my-6 w-full flex flex-col overflow-x-auto  md:flex-row ">
        <div className="flex flex-nowrap gap-2 mx-auto w-fit">
          {" "}
          {/* Adjust grid layout as needed */}
          {ProductData.map((product) => (
            <div key={product.id} className="min-w-[20%] sm:min-w-[30%] md:min-w-[23%] lg:min-w-[18%]">
              {" "}
              {/* Adjust the width per breakpoint */}
              <ProductCard
                id={product.id}
                src={product.src}
                title={product.title}
                alt={product.alt}
                link={product.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
