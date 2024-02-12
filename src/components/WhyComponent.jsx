import React from "react";
// Import specific icons you plan to use or import all and use dynamically
import * as Icons from 'react-icons/fa';

const WhyComponent = ({ iconName, description }) => {
  // Dynamically select the icon component based on iconName prop
  const Icon = Icons[iconName];

  return (

      <div className="flex flex-col md:flex-row md:space-x-[107px] md:space-y-2 space-y-4">
        <div className="w-[222px] flex flex-col justify-center items-center text-center">
          <div className="bg-secondary rounded-full w-[72px] my-4 h-[72px] flex justify-center items-center">
            {/* Conditionally render the Icon if it exists */}
            {Icon ? <Icon size={32} className="text-white" /> : null}
          </div>
          <div>
            <p className="text-black text-sm font-primary">{description}</p>
          </div>
        </div>
      </div>

  );
};

export default WhyComponent;
