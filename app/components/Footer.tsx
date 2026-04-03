import { Link } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  {/* Pondzi App */}
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
          </div>
          <hr className="my-6 border-blue-500/30 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-blue-200 sm:text-center">
              © 2026 Abraham Nyoundou. Tous droits réservés.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.linkedin.com/in/abraham-nyoundou-3a633a2a1/?skipRedirect=true"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin size={30} />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.facebook.com/abrahamalex.nyoundou"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaFacebookSquare size={30} />
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
