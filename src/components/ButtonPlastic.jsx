import React from "react";

const ButtonPlastic = ({text}) => {
  return (
    <div>
      <div>
        <button
          className="whitespace-nowrap inline-flex items-center justify-center py-2 m-2 font-primary bg-secondary rounded-3xl px-9 text-white border-none cursor-pointer" // padding 10px, margin 10px, background red, text white
          type="submit"
        >
            {text}
       
        </button>
      </div>
    </div>
  );
};

export default ButtonPlastic;
