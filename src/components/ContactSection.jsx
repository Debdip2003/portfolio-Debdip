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
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [comment, setComment] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const { register, handleSubmit } = useForm();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const isEmailValid =
  //     /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  //   const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

  //   if (!name) return alert("Please Enter your Name");

  //   if (!isPhoneNumberValid) return alert("Please Enter a Proper Phone Number");

  //   if (!isEmailValid) return alert("Please Enter a Proper Email");

  //   if (!comment) return alert("Please Enter your message");

  //   console.log("message sent");

  //   writeUserData(name, email, phoneNumber, comment);
  // };

  async function writeUserData(name, email, phoneNumber, comment) {
    setisSubmit(true);
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        comment: comment,
      });

      console.log("Document written with ID: ", docRef.id);
      alert("Message has been sent!");
      setisSubmit(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(error.message);
      setisSubmit(false);
    }
  }

  const onSubmit = (data) => {
    const { name, phoneNumber, email, comment } = data;
    console.log(data);
    
    // const isEmailValid =
    //   /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    // const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

    // if (!name) return alert("Please Enter your Name");

    // if (!isPhoneNumberValid) return alert("Please Enter a Proper Phone Number");

    // if (!isEmailValid) return alert("Please Enter a Proper Email");

    // if (!comment) return alert("Please Enter your message");

    writeUserData(name, email, phoneNumber, comment);
  };

  return (
    <div className="flex">
      <form
        className="flex justify-center items-center flex-col gap-4 p-4 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-white">Let's Talk</h1>
        <input
          type="text"
          placeholder="Enter your Full Name"
          className="rounded-2xl w-2/3 p-3"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          type="number"
          placeholder="Enter your Phone Number"
          className="rounded-2xl w-2/3 p-3"
          // value={phoneNumber}
          // onChange={(e) => setPhoneNumber(e.target.value)}
          {...register("phoneNumber", {
            required: true,
            maxLength: 10,
            minLength: 10,
          })}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded-2xl w-2/3 p-3"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          {...register("email", {
            required: true,
          })}
        />
        <textarea
          placeholder="Write down some comments"
          className="rounded-2xl w-2/3 p-3"
          rows={10}
          // value={comment}
          // onChange={(e) => setComment(e.target.value)}
          {...register("comment")}
        />
        <button
          className="bg-blue-600 p-2 px-4 hover:cursor-pointer hover:bg-blue-930 duration-200 rounded-2xl text-white"
          // onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center items-center flex-col gap-4 p-4 md:w-1/2">
        <h1 className="text-3xl text-white">Let's Connect on:-</h1>
        <div className="w-[90%] flex flex-wrap justify-between pt-10">
          <div>
            <a
              href="https://github.com/Debdip2003"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="bg-white rounded-xl size-20 hover:cursor-pointer" />
            </a>
            <p className="text-white mt-4 text-2xl w-full flex justify-center items-center">
              Github
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/debdip-bhattacharya-a1534b24a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="bg-white rounded-xl size-20" />
            </a>
            <p className="text-white mt-4 text-2xl w-full flex justify-center items-center">
              LinkedIn
            </p>
          </div>
          <div>
            <a
              href="https://www.facebook.com/debdip.bhattacharya.5"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="bg-white rounded-xl size-20" />
            </a>
            <p className="text-white mt-4 text-2xl w-full flex justify-center items-center">
              Facebook
            </p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/ft_debdip/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="bg-white rounded-xl size-20" />
            </a>
            <p className="text-white mt-4 text-2xl w-full flex justify-center items-center">
              Instagram
            </p>
          </div>
          <div>
            <a
              href="mailto:dbhattacharya1912@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaMailBulk className="bg-white rounded-xl size-20" />
            </a>
            <p className="text-white mt-4 text-2xl w-full flex justify-center items-center">
              Mail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
