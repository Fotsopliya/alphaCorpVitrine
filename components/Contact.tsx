"use client";

import React, { FormEvent } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@actions/sendEmail";
import SubmitBtn from "./ui/submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    if (!senderEmail || !message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const { data, error } = await sendEmail(formData);

      if (error) {
        throw new Error(error);
      }

      toast.success("Email sent successfully!");
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-gray-700 text-2xl font-light-mt-6">
        Contact us directly at{" "}
        <a className="underline" href="mailto:dfotso2015@gmail.com">
          dfotso2015@gmail.com
        </a>{" "}
        or through the form below
      </h2>
      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
