'use client'
import React, { useState } from "react";
import { useForm, Controller} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




const ContactForm = () => {

 
  const schema = yup.object().shape({
    name: yup
    .string()
    .required("Please enter your name")
    .min(6, "Name should be at least 6 characters")
    .max(20, "Name should not exceed 20 characters")
    .matches(/^[A-Za-z ]*$/, "Name should not contain numbers or special characters"),
    email: yup.string().email("Invalid email format").required("Please enter your email address."),
    subject: yup.string().required("Please enter a subject for your message."),
    message: yup.string().required("Please enter your message."),
  });

  const { handleSubmit, formState: { errors }, control, reset, trigger } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(`Thanks ${data.name}  `);
    reset();
    
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-8 lg:pt-0">
      <div className="mb-10">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              placeholder="Name"
              {...field}
              onBlur={() => trigger("name")} // Trigger validation on blur
              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full"
            />
          )}
        />
        {errors.name && <p className="text-[#f18181] text-sm">{errors.name.message}</p>}
      </div>
      <div className="mb-10">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              placeholder="Email"
              {...field}
              onBlur={() => trigger("email")} // Trigger validation on blur

              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full"
            />
          )}
        />
        {errors.email && <p className="text-[#f18181] text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-10">
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              placeholder="Subject"
              {...field}
              onBlur={() => trigger("subject")} // Trigger validation on blur
              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full"
            />
          )}
        />
        {errors.subject && <p className="text-[#f18181] text-sm">{errors.subject.message}</p>}
      </div>

      <div className="mb-10">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              placeholder="Message"
              {...field}
              onBlur={() => trigger("message")} // Trigger validation on blur
              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full h-[10rem]"
            />
          )}
        />
        {errors.message && <p className="text-[#f18181] text-sm">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col w-full md:w-[40%] xl:w-[20%] mt-10">
        <button
          type="submit"
          disabled={false} // The disabled attribute is handled by React Hook Form
          className="border border-slate-600 rounded-full px-4 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
// api key=re_JDuPqtyj_JPGtuzpgETwQjLg9abfkzXB4