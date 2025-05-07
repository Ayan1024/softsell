import React from "react";
import { motion } from "framer-motion";
import { FaUpload, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-4xl text-blue-500 dark:text-blue-300" />,
    title: "Upload License",
    desc: "Easily upload your unused license using our secure form.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-green-500 dark:text-green-300" />,
    title: "Verification",
    desc: "We quickly verify license authenticity and value.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500 dark:text-yellow-300" />,
    title: "Get Paid",
    desc: "Receive instant payout after successful verification.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
          <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}

          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md ring-1 ring-transparent hover:ring-blue-400 dark:hover:ring-blue-300 transition-all duration-300"
        >
          <div className="mb-4 flex justify-center items-center">{step.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
        </motion.div>
        
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
