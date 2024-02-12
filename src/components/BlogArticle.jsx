import Link from "next/link"
import React from "react";
import SidebarArticle from "./SidebarArticle";

const BlogArticle = ({
  title,
  category,
  date,
  content1,
  content2,
  content3,
  content4,
  content5backLink,
  content5,
  content6,
  author,
  imgUrl1,
  alt1,
  imgUrl2,
  alt2,
  imgUrl3,
  alt3,
  imgUrl4,
  alt4,
  subtitle,
  content7,
  subcontent1,
  subcontentUrl1,
  subcontent2,
  subcontentUrl2,
  content8,
  seo1,
  seo2,
  seo3,
  seo4,
}) => {
  return (
    <div className=" font-primary">
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline"
                  href="#"
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Home
                </Link>
                <h2 className="text-3xl font-bold lg:text-5xl">{title}</h2>
                <div className="flex items-center gap-x-5">
                  <Link
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                    href="#"
                  >
                    {category}
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-800">{date}</p>
                </div>
                <p className="text-lg text-gray-800">{content1}</p>
                <p className="text-lg text-gray-800">{content2}</p>
                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-60">
                        <img
                          className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                          src={imgUrl1}
                          alt={alt1}
                        />
                      </figure>
                      <figure className="relative w-full h-60">
                        <img
                          className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                          src={imgUrl2}
                          alt={alt2}
                        />
                      </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                      <img
                        className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                        src={imgUrl3}
                        alt={alt3}
                      />
                    </figure>
                  </div>
                  <span className="mt-3 block text-sm text-center text-gray-500">
                    {alt1}
                  </span>
                </div>
                <p className="text-lg text-gray-800">{content3}</p>
                <p className="text-lg text-gray-800">
                  {content4} {" "}
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    href="#"
                  >
                    {content5backLink}
                  </Link> {" "}
                  {content5}
                </p>
                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal">
                    {content6}
                  </p>
                  <p className="mt-5 text-gray-800">{author}</p>
                </blockquote>
                <figure>
                  <img
                    className="w-full object-cover rounded-xl"
                    src={imgUrl4}
                    alt={alt4}
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    {alt4}
                  </figcaption>
                </figure>
                <div className>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{subtitle}</h3>
                    <p className="text-lg text-gray-800">{content7}</p>
                  </div>
                  <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                    <li className="ps-2">
                      {subcontent1} {" "}
                      <Link
                        className="text-blue-600 decoration-2 hover:underline font-medium"
                        href="#"
                      >
                        {subcontentUrl1}
                      </Link>{" "}
                    </li>
                    <li className="ps-2">
                      {subcontent2} {" "}
                      <Link
                        className="text-blue-600 decoration-2 hover:underline font-medium"
                        href="#"
                      >
                        {subcontentUrl2}
                      </Link>
                      .
                    </li>
                  </ul>
                  <p className="text-lg text-gray-800">{content8}</p>

                  {/* category icon */}
                  <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 mt-8 lg:gap-y-0">
                    <div>
                      <a
                        className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                        href="#"
                      >
                        {seo1}
                      </a>
                      <a
                        className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                        href="#"
                      >
                        {seo2}
                      </a>
                      <a
                        className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                        href="#"
                      >
                        {seo3}{" "}
                      </a>
                      <a
                        className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                        href="#"
                      >
                        {seo4}
                      </a>
                    </div>

                    {/* icon right */}
                    <div className="flex justify-end items-center gap-x-1.5">
                      <div className="hs-tooltip inline-block">
                        <button
                          type="button"
                          className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokewidth={2}
                            strokelinecap="round"
                            strokelinejoin="round"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                          875
                        </button>
                      </div>
                      <div className="block h-3 border-e border-gray-300 mx-3" />
                      <div className="hs-tooltip inline-block">
                        <button
                          type="button"
                          className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokewidth={2}
                            strokelinecap="round"
                            strokelinejoin="round"
                          >
                            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                          </svg>
                          16
                        </button>
                      </div>
                      <div className="block h-3 border-e border-gray-300 mx-3" />
                      <div className="hs-dropdown relative inline-flex">
                        <button
                          type="button"
                          id="blog-article-share-dropdown"
                          className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokewidth={2}
                            strokelinecap="round"
                            strokelinejoin="round"
                          >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1={12} x2={12} y1={2} y2={15} />
                          </svg>
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* category icon */}
                </div>

                {/* paragraf bawah */}
              </div>
            </div>
          </div>
          <SidebarArticle/>

          {/* Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
