import React from "react";

const ButtonPlastic = ({ text, scrollToId,onButtonClick }) => {

  const handleClick = () => {
    if(onButtonClick) {
      onButtonClick(); // This will open the accordion
    }

    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <button
        className="whitespace-nowrap inline-flex items-center justify-center py-2 m-2 font-primary bg-secondary rounded-3xl px-9 text-white border-none cursor-pointer"
        type="button"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonPlastic;
