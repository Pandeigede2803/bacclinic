import React from "react";
import ArticleCard from "@/components/ArticleCard";

const Article = () => {
  // Sample card data
  const cardData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Studio by Preline",
      description:
        "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
      link: "#",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
      title: "Onsite",
      description:
        "Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval",
      link: "#",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      title: "The complete guide to OKRs",
      description:
        "How to make objectives and key results work for your company",
      link: "#",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "People program models",
      description: "Six approaches to bringing your People strategy to life",
      link: "#",
    },
  ];

  return (
    <div className="font-primary mt-20">
        <h1 className="font-bold text-center text-2xl mb-10">WHAT'S NEW</h1>
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
            />
          ))}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Article;
