import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';


const Header = () => {

  // Animation variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    // Example JSX
    <div className="bg-[url('https://ik.imagekit.io/m1akscp5q/background%20image.png?updatedAt=1707296969772')] h-[909px] w-full bg-cover bg-center absolute top-0 bg-opacity-100">
    <div className="space-y-[60px] flex flex-col justify-center align-middle md:ml-[87px] ml-4 md:my-[195px] my-[95px]">
      <motion.span
        className="flex flex-row items-center text-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.svg
          width="60"
          height="3"
          viewBox="0 0 60 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-fit w-5"
          variants={itemVariants}
        >
          <path
            d="M0 1.5C23.2046 1.5 36.2146 1.5 59.4192 1.5"
            stroke="black"
            strokeWidth="1.74762"
          />
        </motion.svg>

        <motion.h3
          className="ml-4 md:text-[37px] text-[29px] font-primary"
          variants={itemVariants}
        >
          All Beauty In Me
        </motion.h3>
      </motion.span>
      <motion.h1
        className="text- font-primary md:text-[68px] text-[62px] flex "
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        BALI AESTHETIC<br />CENTRE
      </motion.h1>
      <motion.p
        className="font-thin font-secondary md:text-[32px] text-[20px]"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Unleash your beauty charm <br />at Bali Aesthetic Centre clinic
      </motion.p>
      <motion.div
        className="flex md:flex-row flex-col space-y-[20px] md:space-y-0.5 w-[270px] md:w-fit md:space-x-[43px]"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link href="https://wa.me/6287777939598" target="_blank">
          <motion.button
            className="hover:bg-transparent hover:text-black bg-black border-black border text-white font-secondary text-[17px] lg:py-[16px] lg:px-[85px] py-[14px] px-[60px] rounded-[9px]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Reservation
          </motion.button>
        </Link>
        <Link href="/Services">
          <motion.button
            className="hover:bg-black hover:text-white bg-transparent text-black border-black border font-secondary text-[17px] lg:py-[16px] lg:px-[85px] py-[14px] px-[60px] rounded-[9px]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Catalogue
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </div>
  );
};

export default Header;;
