import React, { Component } from "react";
import Slider from "react-slick";
import PromoBanner from "./PromoBanner";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDroprightCircle
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "70px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleftCircle
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "70px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const promoBanners = [
      {
        src: "https://ik.imagekit.io/m1akscp5q/5.jpg?updatedAt=1706021469498",
        alt: "Description of Image 1",
        link: "/",
      },
      {
        src: "https://ik.imagekit.io/m1akscp5q/8.jpg?updatedAt=1706021469485",
        alt: "Description of Image 2",
        link: "/",
      },
      {
        src: "https://ik.imagekit.io/m1akscp5q/1.jpg?updatedAt=1706021469072",
        alt: "Description of Image 2",
        link: "/",
      },
      {
        src: "https://ik.imagekit.io/m1akscp5q/4.jpg?updatedAt=1706021469073",
        alt: "Description of Image 2",
        link: "/",
      },
      {
        src: "https://ik.imagekit.io/m1akscp5q/3.jpg?updatedAt=1706021469495",
        alt: "Description of Image 2",
        link: "/",
      },
      {
        src: "https://ik.imagekit.io/m1akscp5q/1.jpg?updatedAt=1706021469072",
        alt: "Description of Image 2",
        link: "/",
      },
      // ... more banners
    ];

    const settings = {
      centerMode: true,
      centerPadding: "150px",
      accessibility: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 9000,
      cssEase: "ease",
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,

      responsive: [
        {
          breakpoint: 1024, // At 1024px or less
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            centerPadding: "150px",
            arrow: false,
          },
        },
        {
          breakpoint: 600, // At 600px or less
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false,
            centerMode: false,
            
          },
        },

        // You can add more breakpoints here
      ],
    };

    return (
      <div className="bg-primary flex flex-col justify-center mx-auto text-center mt-6 py-4">
        {/* Removed the standalone NextArrow component */}
        <h2 className="font-primary text-[29px]">See Our Promo</h2>
        <h2 className="font-primary text-secondary text-[29px]">
          Our Promo This Month
        </h2>
        <div className="py-10 md:mx-32 mx-10 ">
          <Slider {...settings}>
            {promoBanners.map((banner, index) => (
              <div key={index} className="outline-none">
                {/* Added outline-none to remove focus outline */}
                <PromoBanner
                  src={banner.src}
                  alt={banner.alt}
                  link={banner.link}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
