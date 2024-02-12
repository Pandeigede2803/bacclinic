import React from "react";
import Link from "next/link";

const ArticleCard = ({ imageUrl, title, description }) => {
  return (
    <Link
      className="group rounded-xl overflow-hidden"
      href="#"
    >
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src={imageUrl}
            alt="Image Description"
          />
        </div>
        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
            {title}
          </h3>
          <p className="mt-3 text-gray-600">{description}</p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-secondary decoration-2 hover:underline font-medium">
            Read more
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
