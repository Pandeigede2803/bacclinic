import React from "react";
import TestimoniCards from "./TestimoniCards";

const Testimoni = () => {
  const testimonialData = [
    {
      quote:
        "Setelah sekian lama akhirnya nemu clinic yang cocok. Dokternya informatif banget, abis treatment hasilnya langsung keliatan, ga sakit, tempatnya bersih dan pelayanannya juga the best. Wajib coba sihhh! Very recommended clinic.",
      author: "Asri Cahyani",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 5,
    },
    {
      quote:
        "Klinik estetik yang baru buka di area Sanur. Pelayanannya memuaskan. Terapis selalu menginfokan tindakan yang akan dilakukan dan efek yang akan terasa. Ruangannya sangat nyaman. Tempat parkir juga luas.",
      author: "Anggreni Yudhawati",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      rating: 5,
    },
    {
      quote:
        "Sudah entah yg keberapa kali perawatan di BAC! Treatment2 yang saya ambil sangat detail dan memuaskan. Penjelasan dari Dokter saat konsul sebelum mengambil tindakan, sangat detail. Seluruh staff sangat friendly dan menyenangkan. Saya mendapatkan pengalaman yg sangat memuaskan tiap perawatan di klinik BAC.  ",
      author: "Widya Santhi",
      image: "https://randomuser.me/api/portraits/women/80.jpg",
      rating: 5,
    },
    {
      quote:
        "Tempatnya sangat nyaman dan bersih dokternya juga ramah banget dan ngerti banget apa yg kita mau pkoknya sngat memuaskan dan recommen deh buat di coba ",
      author: "Erna mulyawatie",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      rating: 5,
    },
    {
      quote:
        "Tempatnya nyaman, pelayanannya bagus, staffnya ramah dan sopan. perawatan disini hasilnya sangat nyata setelah perawatan langsung glowing. Puas! Pertahankaaaan.",
      author: "Ayupradnya manikarosa",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      rating: 5,
    },
    {
      quote:
        "Ini baru kedua kalinya treatment di Bac udah mulai kelihatan hasilnya semoga bisa cepet ilang jerewat sma mukak kusemku, staffnya ramah2 semua palgi dokternya baik bangey kasih motivasi buat pasti sembuh psti balik normal lagi kulitnya. Maksih dokter dan staff Bac ❤️",
      author: "dektri sulastri",
      image: "https://randomuser.me/api/portraits/women/78.jpg",
      rating: 5,
    },
    {
      quote:
        "Puas banget sama pelayanan dan staffnya yg kompeten. Kluar dari sini muka kinclong blink blink    ku kira bakal sakit extraksi komedonya ternyata kaga, tp hasilnya beneran bersihakan selalu ada alasan untuk balik treatment kesini 😍 luv",
      author: "Lilis Widiantari",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      rating: 5,
    },

    // ... other testimonials ...
  ];
  return (
    <div>
      <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/wallpaper%20testimoni%201.png?updatedAt=1706170805469')] md:h-[800px]  h-[1000px] w-full bg-cover bg-right  bg-opacity-50  items-center align-middle">
        <div className="font-primary text-center flex flex-col ">
          <h4 className="md:mt-10 md:text-[29px] mt-10 ">TESTIMONIAL</h4>
          <h1 className="md:mt-10 md:text-[52px] text-[30px] mt-10 ">
            WHAT&apos;S CUSTOMER SAY
          </h1>
        </div>
        <div className="">
          <div className=" flex flex-row justify-center mt-10">
            <TestimoniCards testimonials={testimonialData} />
          </div>
        </div>
      </div>
    </div>
  );
};;

export default Testimoni;;;
