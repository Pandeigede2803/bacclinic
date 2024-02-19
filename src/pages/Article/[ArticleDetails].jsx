import BlogArticle from "@/components/BlogArticle";
import SidebarArticle from "@/components/SidebarArticle";
import React from "react";
import ArticleJson from "@/components/Json/ArticleJson";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  // Note the change here: 'TreatmentDetails' matches the file name
  const { ArticleDetails } = router.query; // Pastikan sesuai dengan query yang kamu gunakan

  const articleDetail = ArticleJson.find(
    (article) => article.metadata.slug === ArticleDetails
  );
  
  // Kemudian gunakan `articleDetail` untuk menampilkan detail artikel
  if (!articleDetail) {
    return <div>Article not found</div>;
  }


  return (
    <div>
     <BlogArticle
        title={articleDetail.metadata.title}
        category={articleDetail.metadata.category}
        date={articleDetail.metadata.date}
        content1={articleDetail.content.content1}
        content2={articleDetail.content.content2}
        content3={articleDetail.content.content3}
        content4={articleDetail.content.content4}
        content5backLink={articleDetail.content.content5backLink}
        content5={articleDetail.content.content5}
        content6={articleDetail.content.content6}
        author={articleDetail.content.author}
        imgUrl1={articleDetail.images[0].url}
        alt1={articleDetail.images[0].alt}
        imgUrl2={articleDetail.images[1].url}
        alt2={articleDetail.images[1].alt}
        imgUrl3={articleDetail.images[2].url}
        alt3={articleDetail.images[2].alt}
        imgUrl4={articleDetail.images[3].url}
        alt4={articleDetail.images[3].alt}
        subtitle={articleDetail.content.subtitle}
        content7={articleDetail.content.content7}
        subcontent1={articleDetail.content.subcontent1}
        subcontentUrl1={articleDetail.content.subcontentUrl1}
        subcontent2={articleDetail.content.subcontent2}
        subcontentUrl2={articleDetail.content.subcontentUrl2}
        content8={articleDetail.content.content8}
        seo1={articleDetail.seo[0]}
        seo2={articleDetail.seo[1]}
        seo3={articleDetail.seo[2]}
        seo4={articleDetail.seo[3]}
      />
    </div>
  );
};

export default Page;
