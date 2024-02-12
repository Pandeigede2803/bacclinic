import BlogArticle from "@/components/BlogArticle";
import SidebarArticle from "@/components/SidebarArticle";
import React from "react";
import ArticleJson from "@/components/Json/ArticleJson";

const index = () => {
  return (
    <div>
      {ArticleJson.map((article, index) => (
        <BlogArticle
          key={index}
          title={article.metadata.title}
          category={article.metadata.category}
          date={article.metadata.date}
          content1={article.content.content1}
          content2={article.content.content2}
          content3={article.content.content3}
          content4={article.content.content4}
          content5backLink={article.content.content5backLink}
          content5={article.content.content5}
          content6={article.content.content6}
          author={article.content.author}
          imgUrl1={article.images[0].url}
          alt1={article.images[0].alt}
          imgUrl2={article.images[1].url}
          alt2={article.images[1].alt}
          imgUrl3={article.images[2].url}
          alt3={article.images[2].alt}
          imgUrl4={article.images[3].url}
          alt4={article.images[3].alt}
          subtitle={article.content.subtitle}
          content7={article.content.content7}
          subcontent1={article.content.subcontent1}
          subcontentUrl1={article.content.subcontentUrl1}
          subcontent2={article.content.subcontent2}
          subcontentUrl2={article.content.subcontentUrl2}
          content8={article.content.content8}
          seo1={article.seo[0]}
          seo2={article.seo[1]}
          seo3={article.seo[2]}
          seo4={article.seo[3]}
        />
      ))}
   
    </div>
  );
};

export default index;
