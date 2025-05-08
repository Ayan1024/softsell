import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType)
      newErrors.licenseType = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Message sent! (Simulation)");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              type="text"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              type="text"
              placeholder="Your company name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option value="" disabled hidden>
                Select a license type
              </option>
              <option value="Windows">Windows</option>
              <option value="Office">Office</option>
              <option value="Adobe">Adobe</option>
              <option value="Other">Other</option>
            </select>

            {errors.licenseType && (
              <p className="text-red-500 text-sm">{errors.licenseType}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-28 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
