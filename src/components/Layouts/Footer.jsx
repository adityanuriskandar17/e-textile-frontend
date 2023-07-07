import React from "react";

function Footer() {
  return (
    <footer className="w-full text-gray-700 bg-black body-font">
      <div className="container flex flex-col flex-wrap justify-center mx-auto ">
        <div className="flex mx-auto px-[375px] py-[102px] space-x-[87px]">
          <div className="w-full px-4">
            <p className="text-sm font-medium text-[24px] font-inter tracking-widest text-white uppercase title-font">
              About
            </p>

            <nav className="mb-10 list-none">
              <li className="py-6">
                <a
                  href="/"
                  className="text-white font-inter text-[20px] cursor-pointer hover:text-gray-400  whitespace-nowrap"
                >
                  Subscribe
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/"
                  className="text-white font-poppins cursor-pointer hover:text-gray-400  whitespace-nowrap"
                >
                  Get 10% off your first order
                </a>
              </li>
              {/* Send Email */}
              <li className="mt-3">
                <form className="">
                  <label
                    htmlFor="default-email"
                    className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
                  >
                    email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <a href="/">
                        <img src="/images/send.svg" alt="Send" />
                      </a>
                    </div>
                    <input
                      type="email"
                      id="default-email"
                      className="block w-[217px] h-[48px] p-4 pr-10 text-sm border border-white text-white rounded-lg bg-black focus:ring-white focus:border-white dark:bg-[#000000] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500"
                      placeholder="Enter your Email"
                      required=""
                    />
                  </div>
                </form>
              </li>
              {/* Send Email */}
            </nav>
          </div>
          <div className="w-full px-4">
            <p className="mb-3 text-sm font-medium font-poppins text-[20px] tracking-widest text-white uppercase title-font">
              Support
            </p>
            <nav className="mt-6 space-y-4 list-none">
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer font-poppins hover:text-gray-400 whitespace-nowrap"
                >
                  Bandung, Indonesia
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer font-poppins hover:text-gray-400 whitespace-nowrap"
                >
                  labalabacode@gmail.com
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer font-poppins hover:text-gray-400 whitespace-nowrap"
                >
                  +62 81929372193129
                </a>
              </li>
            </nav>
          </div>

          <div className="w-full px-4">
            <h2 className="mb-3 text-sm font-medium font-poppins text-[20px] tracking-widest text-white uppercase title-font">
              Account
            </h2>
            <nav className="mt-6 space-y-4 list-none">
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  My Account
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Login / Register
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Cart
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Whishlist
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Shop
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4">
            <p className="mb-3 text-sm font-medium font-poppins text-[20px] tracking-widest text-white uppercase title-font whitespace-nowrap">
              Quick Link
            </p>
            <nav className="mt-6 space-y-4 list-none">
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Term Of Use
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  FAQ
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="/"
                  className="text-white cursor-pointer hover:text-gray-400 whitespace-nowrap"
                >
                  Contact
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-white capitalize text-center font-poppins">
            © 2023 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
