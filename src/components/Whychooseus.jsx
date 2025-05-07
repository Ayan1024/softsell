import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBolt, FaThumbsUp, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500 dark:text-blue-300" />,
    title: "Secure Process",
    desc: "We prioritize your data privacy and license safety.",
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-500 dark:text-yellow-300" />,
    title: "Quick Turnaround",
    desc: "Valuation and payout in under 24 hours.",
  },
  {
    icon: <FaThumbsUp className="text-4xl text-green-500 dark:text-green-300" />,
    title: "Trusted by Thousands",
    desc: "Hundreds of happy customers across industries.",
  },
  {
    icon: <FaHeadset className="text-4xl text-purple-500 dark:text-purple-300" />,
    title: "Dedicated Support",
    desc: "We're always available to help via chat or email.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
           <motion.div
           key={idx}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           whileHover={{ scale: 1.05, rotate: 0.5 }}
           transition={{ duration: 0.4, delay: idx * 0.1 }}
           viewport={{ once: true }}
           className="p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-2xl transform transition-all duration-300 flex flex-col items-center text-center"
         >
           {/* Center the icon */}
           <div className="mb-4 flex items-center justify-center">
             {item.icon}
           </div>
         
           <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
             {item.title}
           </h3>
           <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
         </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
