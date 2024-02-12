import React from "react";
import SinglePage from "@/components/SinglePage";
import CtaSection from "@/components/ctaSection";
import TreatmentDetailsData from "@/components/Json/TreatmentDetails";
import { useRouter } from "next/router";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link'; 

const Single = () => {
  const router = useRouter();
  // Note the change here: 'TreatmentDetails' matches the file name
  const { TreatmentDetails } = router.query;

  const treatmentDetail = TreatmentDetailsData.find(
    (detail) => detail.slug === TreatmentDetails
  );
  console.log(treatmentDetail);
  if (!treatmentDetail) {
    return <div>Treatment not found</div>;
  }

  return (
    <div>
      {/* Back Button */}
      <div className="my-4">
        <Link href="/Services" passHref>
          <div className="flex items-center gap-2 text-secondary hover:text-black">
            <IoMdArrowRoundBack size="24px" />
            Back to Services
          </div>
        </Link>
      </div>

      <SinglePage
        key={treatmentDetail.id}
        pageTitle={treatmentDetail.pageTitle}
        imageSrc={treatmentDetail.imageSrc}
        videoUrl={treatmentDetail.videoUrl}
        benefitsList={treatmentDetail.benefitsList}
        treatments={treatmentDetail.treatments}
      />
      <CtaSection />
      <FloatingWhatsApp
        phoneNumber="6287777939598"
        accountName="BAC CLINIC"
        className="whatsapp-icon"
        avatar="https://ik.imagekit.io/m1akscp5q/logo%20bac%20vertikal.png?updatedAt=1706761240275"
        chatMessage="Hello there! 🤝 How can we help?"
      />
    </div>
  );
};

export default Single;
