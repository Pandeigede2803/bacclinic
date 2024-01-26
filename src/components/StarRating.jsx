import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= rating ? "text-yellow-500" : "text-gray-300"}
          >
            {index <= rating ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
