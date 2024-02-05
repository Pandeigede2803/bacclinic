import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleClose = () => setIsMenuOpen(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className=" bg-white bg-opacity-80 md:bg-opacity-80 sticky top-0 z-50   text-black md:bg-white font-primary mx-0 mt-0  bg-no-repeat bg-top md:bg-cover md:bg-top">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link className="flex flex-row" href="/">
          <Image
            src="https://ik.imagekit.io/m1akscp5q/logo%20bac%20horizontal%20hitam%201.png?updatedAt=1705581337965"
            width={193}
            height={48}
            alt="logo bac"
          />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-white ">
            <li onClick={toggleClose}>
              <Link
                href="/"
                className="block md:hover:text-secondary py-2 px-3 hover:bg-gray-100 text-black rounded hover:md:bg-transparent md:text-black md:p-0   "
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="flex  items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:w-auto  "
                onClick={toggleDropdown}
              >
                <Link
                  onClick={closeAllMenus}
                  href="/Services"
                  className=" hover:text-secondary"
                >
                  Services
                </Link>
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="absolute z-10 font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 bg-white  dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li onClick={closeAllMenus}>
                      <Link
                        href="/Services/detox-skin-treatment"
                        className="block px-4 py-2 hover:bg-primary "
                      >
                        Skin Treatment
                      </Link>
                    </li>
                    <li onClick={closeAllMenus}>
                      <Link
                        href="/Services/skin-booster"
                        className="block px-4 py-2 hover:bg-primary "
                      >
                        Skin Booster
                      </Link>
                    </li>
                    <li onClick={closeAllMenus}>
                      <Link
                        href="/Services/Botox"
                        className="block px-4 py-2 hover:bg-primary "
                      >
                        Botox
                      </Link>
                    </li>
                    <li onClick={closeAllMenus}>
                      <Link
                        href="/Services/Plastic-surgery"
                        className="block px-4 py-2 hover:bg-primary "
                      >
                        Plastic Surgery
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link
                      onClick={closeAllMenus}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-primary  "
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
              onClick={closeAllMenus}
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0    "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
              onClick={closeAllMenus}
                href="/Promo"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0     "
              >
                Promo
              </Link>
            </li>

            <li>
              <Link
              onClick={closeAllMenus}
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0  "
              >
                Contact
              </Link>
            </li>
            {/* ... other navigation items ... */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;;;
