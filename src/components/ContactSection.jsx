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

const ContactSection = () => {
  const [isSubmit, setIsSubmit] = useState(false);
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
    } catch (error) {
      alert(error.message);
      setIsSubmit(false);
    }
  }

  const onSubmit = (data) => {
    writeUserData(data.name, data.email, data.phoneNumber, data.comment);
  };

  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-10 gap-10 bg-black">
      {/* Form Section */}
      <form
        className="flex flex-col gap-4 items-center w-full md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-white mb-4 text-center">Let's Talk</h1>

        <input
          type="text"
          placeholder="Enter your Full Name"
          className="rounded-2xl w-full max-w-md p-3"
          {...register("name", { required: "Name is required", maxLength: 20 })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="tel"
          placeholder="Enter your Phone Number"
          className="rounded-2xl w-full max-w-md p-3"
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}

        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded-2xl w-full max-w-md p-3"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <textarea
          placeholder="Write down some comments"
          className="rounded-2xl w-full max-w-md p-3"
          rows={6}
          {...register("comment")}
        />

        <button
          type="submit"
          disabled={isSubmit}
          className="bg-blue-600 p-3 px-6 rounded-2xl text-white hover:bg-blue-700 duration-200 disabled:opacity-50"
        >
          {isSubmit ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Social Media Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 gap-8">
        <h1 className="text-3xl text-white mb-4 text-center">
          Let's Connect on:
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center w-full">
          {[
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
          ].map(({ Icon, url, label }) => (
            <div key={label} className="flex flex-col items-center text-white">
              <a href={url} target="_blank" rel="noreferrer" aria-label={label}>
                <div className="bg-white rounded-xl p-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:cursor-pointer hover:bg-gray-200 transition">
                  <Icon className="text-black w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </a>
              <p className="mt-2 text-lg sm:text-xl">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
