import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-800 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-white mb-4">
          Unlock Value from Unused Software Licenses
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          SoftSell helps you resell unused or extra licenses in minutes. Safe,
          fast, and fully online.
        </p>
        <Button/>
      </motion.div>
    </section>
  );
};

export default Hero;
