import React from 'react';
import TreatmentCards from './TreatmentCards';
import TreatmentDatas from "@/components/Json/TreatmentDatas";

const TreatmentGrid = () => {
  
  // Example data array

  return (
    <div className='  h-[1000px] overflow-y-auto  flex flex-col  my-10'>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto gap-4 md:gap-8  '>
      {TreatmentDatas.map((treatment, index) => (
        <TreatmentCards
          key={index}
          imageUrl={treatment.imageUrl}
          title={treatment.title}
          content={treatment.content}
          slug={treatment.slug}
          alt={treatment.alt}
        />
      ))}
    </div>
    </div>
  );
};

export default TreatmentGrid;
