import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mknlyeja");
  if (state.succeeded) {
    return <p>Thanks for submiting</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered rounded-xl p-3 2xl:w-[30rem] w-full my-10"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email"
        className="input input-bordered rounded-xl p-3 2xl:w-[30rem] w-full"
      />

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
        className="input input-bordered rounded-xl p-3 2xl:w-[30rem] w-full my-10"
      />

      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="message"
        className="textarea textarea-bordered rounded-xl p-3 2xl:w-[30rem] w-full h-[10rem]"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="flex flex-col w-full md:w-[40%] xl:w-[20%] mt-10">
        <button
          type="submit"
          disabled={state.submitting}
          className="border border-slate-600 rounded-full px-4 py-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
