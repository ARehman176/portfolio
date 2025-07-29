import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import pic from "../assets/pic.svg";
import Footer from "../Component/Footer";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
   
  });

  const [errors, setErrors] = useState({});
  const maxChars = 100;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "This field is required.";
    if (!formData.email) newErrors.email = "This field is required.";
    if (!formData.subject) newErrors.subject = "This field is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div className="w-full">
      {/* === Top Section === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 space-y-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* === Images Column === */}
          <div className="flex-1 flex flex-wrap gap-4 ml-10">
            <div className="w-full sm:w-1/2 lg:w-[48%] h-52">
              <img
                src={image1}
                alt="Project 1"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-[38%] h-52 bg-[#e9f1ff] rounded-lg flex flex-col justify-center items-center text-center shadow-md mt-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2c344b]">
                100+
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-2">
                Satisfied Customers
              </p>
            </div>

            <div className="w-full sm:w-1/2 lg:w-[48%] h-44 ">
              <img
                src={image2}
                alt="Project 2"
                className="w-full h-full rounded-lg object-cover "
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-[45%] h-44 mt-2">
              <img
                src={pic}
                alt="Project 3"
                className="w-full h-full rounded-lg object-cover "
              />
            </div>
          </div>

          {/* === Text Column === */}
          <div className="flex-1 flex flex-col justify-center ml-10 -mt-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-sky-400 mb-4 flex items-center gap-2">
              <span role="img" aria-label="email" className="mb-3 ">
                📩
              </span>
              Let's make something great
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-sky-400 mb-4">
              together.
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, I’m{" "}
              <span className="font-bold text-gray-800">Abdul Rehman</span> — a
              passionate
              <span className="font-semibold text-gray-800">
                {" "}
                front-end developer
              </span>{" "}
              with
              <span className="font-semibold text-gray-800">
                {" "}
                6 months of experience
              </span>{" "}
              turning complex ideas into clean, accessible, and delightful
              digital interfaces.
            </p>

            <p className="text-sm sm:text-md text-gray-600 flex items-center gap-2">
              <span role="img" aria-label="email">
                ✉️
              </span>
              Email:{" "}
              <a
                href="mailto:mianabdulrehman176@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mianabdulrehman176@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* === Full Width Contact Form Section === */}
      <div className="w-full bg-gray-100 py-16">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-400">
              Drop a Line
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Drop a line for the sake of engagement and I will get back to you
              shortly.
            </p>

            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.email}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">⚠️ {errors.subject}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Message (Max 100 Letters)"
                value={formData.message}
                onChange={handleChange}
                maxLength={maxChars}
                className="w-full p-3 rounded-lg border border-gray-300 h-32 resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.message.length} of {maxChars} max characters.
              </p>
            </div>

            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
