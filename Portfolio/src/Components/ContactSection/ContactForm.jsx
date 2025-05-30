import { Buttons } from "../../ui/Buttons";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { contactMeScema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorHandler from "../../ErrorHandler";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactMeScema),
  });

  const onSumit = (data) => {
    axios
      .post("http://localhost:3000/user/contact", data)
      .then((response) => {
        if (response.status) {
          console.log("Jello");
          toast.success("Send Succesfullt");

          reset();
        }
      })
      .catch((error) => {
        console.error("ERROR:", error.response?.data || error.message); //
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSumit)}
        className="flex flex-col gap-4 mt-4"
      >
        <div>
          <input
            type="text"
            className="bg-lightBrown w-full h-12 rounded-lg p-2 text-white "
            placeholder="Enter the Full Name"
            {...register("name")}
          />
          {errors.name && <ErrorHandler message={errors.name.message} />}
        </div>
        <div>
          <input
            type="email"
            className="bg-lightBrown w-full h-12 rounded-lg p-2 text-white "
            placeholder="Enter the Email"
            {...register("email")}
          />
          {errors.email && <ErrorHandler message={errors.email.message} />}
        </div>
        <div>
          <textarea
            id=""
            placeholder="Enter The Message"
            className="bg-lightBrown w-full rounded-lg p-2 text-white h-30"
            {...register("userMessage")}
          ></textarea>
          {errors.userMessage && (
            <ErrorHandler message={errors.userMessage.message} />
          )} 
        </div>
        <Buttons
          type="submit"
          className="rounded-lg bg-cyan h-12 text-xl hover:bg-darkCyan"
        >
          Send
        </Buttons>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </form>
    </div>
  );
};

export default ContactForm;
