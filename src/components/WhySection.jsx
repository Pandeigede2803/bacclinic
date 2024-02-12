import React from "react";
import Image from "next/image";
import WhyComponent from "./WhyComponent";
import items from "./Json/IconItem";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const WhySection = () => {
  const { ref, inView } = useInView({
    // Options: threshold: 0.1 means the item will be considered in the viewport after 10% of it enters the viewport.
    threshold: 0.2,
    triggerOnce: true, // Animation will only trigger once
  });

  const firstThreeItems = items.slice(0, 3);
  const remainingItems = items.slice(3);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: index => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: index * 0.5, // Increase delay between items
        duration: 0.9 // Adjust duration as needed
      }
    }),
  };

  return (
    <div ref={ref} className="relative">
      <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/DSC03349.png?updatedAt=1706004003279')] md:h-[909px] h-[1400px] w-full bg-cover bg-center bg-opacity-50 flex justify-center flex-col items-center align-middle">
        <div className="opacity-80 my-20 md:mx-20 mx-40 space-y-2 rounded-3xl bg-white w-full md:w-fit lg:w-[1200px] h-[1897.49px] flex flex-col justify-start align-middle items-center text-white">
          <h1 className="my-20 text-center text-black font-primary text-3xl">
            WHY BALI AESTHETIC CLINIC
          </h1>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              hidden: { opacity: 0, y: 20 },
            }}
            className="mb-22 px-2 py-4 flex justify-center flex-col md:flex-row md:space-x-[57px] lg:space-x-[107px] md:space-y-0 space-y-4"
          >
            {firstThreeItems.map((item, index) => (
              <WhyComponent
                key={index}
                iconName={item.iconName}
                description={item.description}
              />
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.2 },
              },
              hidden: { opacity: 0, y: 20 },
            }}
            className="my-22 flex justify-center flex-col md:flex-row md:space-x-[107px] md:space-y-0 space-y-4"
          >
            {remainingItems.map((item, index) => (
              <WhyComponent
                key={index}
                iconName={item.iconName}
                description={item.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
