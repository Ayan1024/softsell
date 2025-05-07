import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Brand Center</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Help Center</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Discord Server</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Licensing</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Download</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">iOS</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Android</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Windows</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">MacOS</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} SoftSell™. All rights reserved.
        </p>
        <div className="mt-4 sm:mt-0 flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-blue-600 dark:hover:text-white"><BsFacebook /></a>
          <a href="#" className="hover:text-pink-500 dark:hover:text-white"><BsInstagram /></a>
          <a href="#" className="hover:text-blue-400 dark:hover:text-white"><BsTwitter /></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white"><BsGithub /></a>
          <a href="#" className="hover:text-pink-400 dark:hover:text-white"><BsDribbble /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
