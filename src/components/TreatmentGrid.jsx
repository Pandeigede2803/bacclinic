import React from 'react';
import TreatmentCards from './TreatmentCards';

const TreatmentGrid = () => {
  // Example data array
  const treatments = [
    {
      imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
      title: "Detox Skin Treatment",
      content: "Some quick example text to build on the card title.",
      link:"/Services/SinglePage",
    },
    {
      imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
      title: "Rejuvenating Facial",
      content: "Detailed description of the rejuvenating facial treatment.",
      link:"/Services/SinglePage",
      
    },
    {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/Services/SinglePage",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/Services/SinglePage",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/Services/SinglePage",
      },

      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/Services/SinglePage",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/Services/SinglePage",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/#",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/#",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/#",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/#",
      },
      {
        imageUrl: "https://ik.imagekit.io/m1akscp5q/Rectangle%2043.png?updatedAt=1705909839482",
        title: "Rejuvenating Facial",
        content: "Detailed description of the rejuvenating facial treatment.",
        link:"/#",
      },
    // Add more treatment objects as needed
  ];

  return (
    <div className='  h-[1221px] overflow-y-auto flex flex-col justify-center my-14'>
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-[123px]  '>
      {treatments.map((treatment, index) => (
        <TreatmentCards
          key={index}
          imageUrl={treatment.imageUrl}
          title={treatment.title}
          content={treatment.content}
          link={treatment.link}
        />
      ))}
    </div>
    </div>
  );
};

export default TreatmentGrid;
