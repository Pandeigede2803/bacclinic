import React from "react";
import SinglePage from "@/components/SinglePage";
import SinglePageData from "@/components/SinglePageData";
import CtaSection from "@/components/ctaSection"

const Single = () => {
  return (
    <div>
      <div>
      {SinglePageData.map((page, index) => (
        <SinglePage
          key={index}
          pageTitle={page.pageTitle}
          imageSrc={page.imageSrc}
          videoUrl={page.videoUrl}
          benefitsList={page.benefitsList}
          treatments={page.treatments}
        />
      ))}
      </div>
      <CtaSection/>
    </div>
  );
};

export default Single;
