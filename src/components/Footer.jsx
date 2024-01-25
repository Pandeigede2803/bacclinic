import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
            </Link>
          </div>
          {/* ... other divs and content ... */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.</span>
          {/* Social Media Links or other content */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
