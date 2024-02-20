import React from "react";
import Image from "next/image"; // Pastikan menggunakan 'next/image' bukan 'next/link'
import ButtonPlastic from "@/components/ButtonPlastic";
import PlasticData from "@/components/Json/PlasticData";
import AccordionSurg from "@/components/AccordionSurg";
import SurgeryData from "@/components/Json/SurgeryData";
import AccordionSurgery from "@/components/AccordionSurgery";

const PlasticSurgery = () => {
  // Fungsi untuk menangani saat form disubmit
  const handleSearch = (event) => {
    event.preventDefault();

    const searchTerm = event.target.elements.search.value;
    console.log("Pencarian untuk:", searchTerm);
  };

  return (
    <div className=" flex flex-col justify-center">
      <Image
        src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="plastic surgery"
        width={1280}
        height={394}
        className="w-full h-auto"
      />
      {/* Search */}
      <div className="flex  mt-10 mx-auto   flex-row  justify-centre">
        <form className=" flex flex-row   font-primary" onSubmit={handleSearch}>
          <input
            className="p-2 m-2 w-[800px]  border  border-black rounded-2xl" // padding 10px, margin 10px, width 80%
            type="text"
            name="search"
            placeholder="Search for specific treatments"
          />
          <button
            className="p-2 m-2 bg-secondary rounded-2xl px-12 hover:bg-black  text-white border-none cursor-pointer" // padding 10px, margin 10px, background red, text white
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <div className=" flex flex-row overflow-x-auto w-[980px] mx-auto">
          {PlasticData.map((data, index) => (
            <div key={index} className="">
              <ButtonPlastic text={data.category} />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <AccordionSurgery/>


          

       
        </div>

      </div>
    </div>
  );
};

export default PlasticSurgery;
