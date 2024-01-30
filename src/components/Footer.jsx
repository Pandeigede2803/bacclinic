import Link from "next/link";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import Accordion from "./AccordionItem";
import FooterNav from "./FooterNav";
import Location from "./Location";

const Footer = () => {
  return (
    <footer className=" font-primary">
      <div className=" md:space-x-2 w-full bg p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-center   flex-col md:flex-row ">
          {/* logo */}
          <div className="md:w-[600px] ">
            <div className="mb-6 md:mb-0">
              <Link href="https://flowbite.com/" className="flex items-center">
                <Image
                  src="https://ik.imagekit.io/m1akscp5q/logo%20bac%20horizontal%20hitam%201.png?updatedAt=1705581337965"
                  width={193}
                  height={48}
                  alt="Image footer"
                />
              </Link>
            </div>

            <div>
              <p className="md:ml-4 font-secondary mt-4 md:text-[12px]">
              Di Bali Aesthetic Centre, kami membawa keindahan pulau Bali ke dalam setiap aspek layanan estetika kami. Sebagai pionir dalam industri kecantikan dan perawatan kulit di Bali, kami mengkhususkan diri dalam memberikan pengalaman perawatan yang holistik dan personal.
              </p>
            </div>

            {/* socmed icon */}
            <div className=" mt-10 md:ml-4 flex flex-row space-x-4">
              <AiFillInstagram />
              <TbBrandTiktok />
              <RiWhatsappFill />
            </div>
          </div>

          <div className=" w-full md:hidden  ">
            <Accordion/>
          </div>
          <div className=" w-full hidden md:flex md:mx-2  ">
            <FooterNav/>
          </div>

          <div className=" md:w-2/4 w-full ">
            <Location/>
          </div>
          
          {/* accordion */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              Boss kreator
            </Link>
            . All Rights Reserved.
          </span>
          {/* Social Media Links or other content */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
