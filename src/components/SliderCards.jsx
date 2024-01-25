import React, { Component } from 'react';
import Slider from 'react-slick';
import CardsTreatment from './CardsTreatment';

export default class AutoPlay extends Component {
  render() {
    // Define the treatments data directly in the component
    const treatments = [
      {
        id: "treatment1",
        src: "https://ik.imagekit.io/m1akscp5q/Rectangle%2042.png?updatedAt=1705909839559",
        title: "Treatment 1",
        alt: "Description of Treatment 1",
        link: "/#",
      },
      {
        id: "treatment2",
        src: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Treatment 2",
        alt: "Description of Treatment 2",
        link: "/#",
      },
  
      {
        id: "treatment3",
        src: "https://ik.imagekit.io/m1akscp5q/Rectangle%2044.png?updatedAt=1705909839238",
        title: "Treatment 2",
        alt: "Description of Treatment 2",
        link: "/#",
      },
      {
        id: "treatment3",
        src: "https://ik.imagekit.io/m1akscp5q/Rectangle%2044.png?updatedAt=1705909839238",
        title: "Treatment 2",
        alt: "Description of Treatment 2",
        link: "/#",
      },
      {
        id: "treatment3",
        src: "https://ik.imagekit.io/m1akscp5q/Rectangle%2044.png?updatedAt=1705909839238",
        title: "Treatment 2",
        alt: "Description of Treatment 2",
        link: "/#",
      },
      {
        id: "treatment3",
        src: "https://ik.imagekit.io/m1akscp5q/Rectangle%2044.png?updatedAt=1705909839238",
        title: "Treatment 2",
        alt: "Description of Treatment 2",
        link: "/#",
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrow:"true",
      centerMode: true,
      centerPadding: "10px",
      // accessibility: true,
      responsive: [
        {
          breakpoint: 1024, // At 1024px or less
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600, // At 600px or less
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can add more breakpoints here
      ]
    };

    return (
      <div className='mx-6'>
        <div className='mb-8'>
        <h2 className=' font-primary text-center text-[24px]'>OUR SERVICES</h2>
        <h2 className='text-secondary font-primary text-center text-[24px] '>Skin Treatments</h2>
        </div>
        <Slider {...settings}>
          {treatments.map((treatment) => (
            <CardsTreatment
              key={treatment.id}
              id={treatment.id}
              src={treatment.src}
              title={treatment.title}
              alt={treatment.alt}
              link={treatment.link}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
