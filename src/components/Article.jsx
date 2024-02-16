import React from "react";
import ArticleCard from "@/components/ArticleCard";
import CardDataArticle from "./Json/CardDataArticle";

const Article = () => {
  // Sample card data
  const cardData = CardDataArticle

  return (
    <div className="font-primary mt-20">
        <h1 className="font-bold text-center text-2xl mb-10">WHAT&apos;S NEW</h1>
        <h4 className=" text-center text-xl text-secondary "> Explore Our Latest Insights and Tips in the World of Skincare and Wellness</h4>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {/* Map over the cardData and render each ArticleCard component */}
          {cardData.map((data, index) => (
            <ArticleCard
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              slug={data.slug}
            />
          ))}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Article;
