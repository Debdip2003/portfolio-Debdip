import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { db } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import contactUs from "../assets/contactUs.svg";

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
    url: "mailto:debdip987@gmail.com",
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
      className="w-full flex items-center justify-center py-16 relative overflow-hidden animate-fade-in-up"
    >
      {/* Card */}
      <div className="card relative w-full mx-8 md:mx-16 flex flex-col md:flex-row rounded-3xl p-0 z-10 overflow-hidden animate-fade-in-up">
        {/* Left Side - Image */}
        <div
          className="w-full md:w-2/5 flex flex-col items-center justify-center p-8 md:p-12"
          style={{
            background: "var(--bg-card)",
            borderRight: "1px solid var(--border)",
          }}
        >
          <img 
            src={contactUs} 
            alt="Contact Us" 
            className="w-full max-w-sm opacity-90 animate-fade-in-up" 
          />
        </div>
        
        {/* Right Side - Form */}
        <div
          className="w-full md:w-3/5 flex flex-col justify-center items-center p-8 md:p-12"
          style={{ background: "var(--bg-card-hover)" }}
        >
          <form
            className="flex flex-col gap-5 w-full max-w-2xl animate-fade-in-up"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="section-heading text-3xl mb-4">Get in Touch</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="form-input w-full px-4 py-3 rounded-xl transition-all"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 20,
                  })}
                />
                {errors.name && (
                  <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="form-input w-full px-4 py-3 rounded-xl transition-all"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="form-input w-full px-4 py-3 rounded-xl transition-all"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <textarea
                id="comment"
                placeholder="Your Message"
                className="form-input w-full px-4 py-3 rounded-xl transition-all resize-none"
                rows={5}
                {...register("comment")}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmit}
                className="btn-accent py-3 px-12 mt-2 rounded-xl font-medium disabled:opacity-50 transition-all hover:scale-105"
              >
                {isSubmit ? "Sending..." : "Send Message"}
              </button>
            </div>
            {showSuccess && (
              <div
                className="fixed top-8 right-8 px-6 py-3 rounded-2xl flex items-center gap-3 animate-fade-in z-50"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--accent-green)",
                  color: "var(--accent-green)",
                }}
              >
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
