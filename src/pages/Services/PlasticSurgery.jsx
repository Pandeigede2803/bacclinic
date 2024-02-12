import React from "react";
import Image from "next/image"; // Pastikan menggunakan 'next/image' bukan 'next/link'
import ButtonPlastic from "@/components/ButtonPlastic";
import PlasticData from "@/components/Json/PlasticData";

const PlasticSurgery = () => {
  // Fungsi untuk menangani saat form disubmit
  const handleSearch = (event) => {
    event.preventDefault();
    // Dapatkan nilai dari input dan lakukan pencarian
    const searchTerm = event.target.elements.search.value;
    console.log("Pencarian untuk:", searchTerm);
    // Tambahkan logika pencarian atau navigasi di sini
  };

  return (
    <div className=" flex flex-col justify-center">
      <Image
        src="https://ik.imagekit.io/m1akscp5q/Vector.png?updatedAt=1707457166360"
        alt="plastic surgery"
        width={1152}
        height={394}
      />
{/* Search */}
      <div className="flex w-full  mx-9  flex-col  justify-centre">
        <form className="font-primary" onSubmit={handleSearch}>
          <input
            className="p-2 m-2 w-3/5 border border-black rounded-2xl" // padding 10px, margin 10px, width 80%
            type="text"
            name="search"
            placeholder="Search for specific treatments"
          />
          <button
            className="p-2 m-2 bg-secondary rounded-2xl px-12  text-white border-none cursor-pointer" // padding 10px, margin 10px, background red, text white
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div>
       <div className=" flex flex-row overflow-x-auto mx-8">
        {PlasticData.map((data, index) => (
          <div key={index} className="">
            <ButtonPlastic text={data.category}/>
          </div>
        ))}
        </div>
      </div>
      
    </div>
  );
};

export default PlasticSurgery;
