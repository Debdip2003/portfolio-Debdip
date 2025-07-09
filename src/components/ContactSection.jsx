import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { db } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import GlassIcons from "./GlassIcons";

const socials = [
  {
    Icon: FaGithub,
    url: "https://github.com/Debdip2003",
    label: "Github",
  },
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/debdip-bhattacharya-a1534b24a/",
    label: "LinkedIn",
  },
  {
    Icon: FaFacebook,
    url: "https://www.facebook.com/debdip.bhattacharya.5",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/ft_debdip/",
    label: "Instagram",
  },
  {
    Icon: FaMailBulk,
    url: "mailto:dbhattacharya1912@gmail.com",
    label: "Mail",
  },
];

const ContactSection = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function writeUserData(name, email, phoneNumber, comment) {
    setIsSubmit(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        phoneNumber,
        comment,
      });
      alert("Message has been sent!");
      setIsSubmit(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      alert(error.message);
      setIsSubmit(false);
    }
  }

  const onSubmit = (data) => {
    writeUserData(data.name, data.email, data.phoneNumber, data.comment);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden animate-fade-in-up text-white"
    >
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      {/* Split Glassmorphic Card */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-black/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-0 md:p-0 z-10 overflow-hidden animate-fade-in-up">
        {/* Info Panel */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-between p-8 md:p-12 bg-black/70 backdrop-blur-2xl border-r border-white/10">
          <div className="w-full flex flex-col items-center gap-4">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 tracking-tight">
              Debdip Bhattacharya
            </h2>
            <div className="flex flex-col gap-3 text-white/90 text-base items-start w-full">
              <a
                href="tel:+919007154749"
                className="flex items-center gap-3 group hover:text-blue-400 transition"
              >
                <FaPhoneAlt className="text-xl" />
                +91 9007154749
              </a>
              <a
                href="mailto:debdip987@gmail.com"
                className="flex items-center gap-3 group hover:text-pink-400 transition"
              >
                <FaEnvelope className="text-xl" />
                debdip987@gmail.com
              </a>

              <span className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl" />
                Kolkata, WB
              </span>
            </div>
          </div>
          {/* Social Icons Row */}
          <GlassIcons
            items={socials.map((social) => {
              return {
                icon: <social.Icon className="text-2xl" />,
                label: social.label,
                url: social.url,
                color: "purple", // You can customize the color for each icon
              };
            })}
          ></GlassIcons>
        </div>
        {/* Form Panel */}
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-8 md:p-16 bg-black/40">
          <form
            className="flex flex-col gap-6 w-full max-w-md animate-fade-in-up"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Talk
            </h1>
            {/* Floating label input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer rounded-xl w-full p-4 border border-white/10 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 transition backdrop-blur-md placeholder-transparent"
                {...register("name", {
                  required: "Name is required",
                  maxLength: 20,
                })}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
              >
                Full Name
              </label>
              {errors.name && (
                <p className="text-pink-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phoneNumber"
                placeholder=" "
                className="peer rounded-xl w-full p-4 border border-white/10 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 transition backdrop-blur-md placeholder-transparent"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              <label
                htmlFor="phoneNumber"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
              >
                Phone Number
              </label>
              {errors.phoneNumber && (
                <p className="text-pink-400 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer rounded-xl w-full p-4 border border-white/10 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 transition backdrop-blur-md placeholder-transparent"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base"
              >
                Email
              </label>
              {errors.email && (
                <p className="text-pink-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <textarea
                id="comment"
                placeholder=" "
                className="peer rounded-xl w-full p-4 border border-white/10 bg-white/10 text-white focus:ring-2 focus:ring-blue-400 transition backdrop-blur-md placeholder-transparent min-h-[120px]"
                rows={5}
                {...register("comment")}
              />
              <label
                htmlFor="comment"
                className="absolute left-4 top-6 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
              >
                Your Message
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmit}
              className="bg-gradient-to-r from-blue-600 to-pink-600 p-3 px-8 rounded-xl text-white font-semibold shadow-lg hover:from-pink-600 hover:to-blue-600 duration-200 disabled:opacity-50 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-glow relative overflow-hidden"
            >
              <span className="relative z-10">
                {isSubmit ? "Submitting..." : "Submit"}
              </span>
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-lg animate-pulse-slow" />
            </button>
            {showSuccess && (
              <div className="fixed top-8 right-8 bg-black/80 border border-green-400 text-green-300 px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-fade-in z-50">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
