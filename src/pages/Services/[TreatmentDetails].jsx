import React from "react";
import SinglePage from "@/components/SinglePage";
import CtaSection from "@/components/ctaSection";
import TreatmentDetailsData from '@/components/TreatmentDetails';
import { useRouter } from "next/router";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Single = () => {
  const router = useRouter();
  // Note the change here: 'TreatmentDetails' matches the file name
  const { TreatmentDetails } = router.query;


  const treatmentDetail = TreatmentDetailsData.find(detail => detail.slug === TreatmentDetails);
console.log(treatmentDetail);
  if (!treatmentDetail) {
    return <div>Treatment not found</div>;
  }

  return (
    <div>
      <SinglePage
        key={treatmentDetail.id}
        pageTitle={treatmentDetail.pageTitle}
        imageSrc={treatmentDetail.imageSrc}
        videoUrl={treatmentDetail.videoUrl}
        benefitsList={treatmentDetail.benefitsList}
        treatments={treatmentDetail.treatments}
      />
      <CtaSection />
      <FloatingWhatsApp/>
    </div>
  );
};

export default Single;
