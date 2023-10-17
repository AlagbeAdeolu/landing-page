import { ArrowForward } from "@mui/icons-material";
import React, { useState } from "react";

const Contact = () => {
  const [isFullNameFocused, setFullNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isMessageFocused, setMessageFocused] = useState(false);

  const handleFocus = (inputName) => {
    switch (inputName) {
      case "fullName":
        setFullNameFocused(true);
        setEmailFocused(false);
        setMessageFocused(false);
        break;
      case "email":
        setFullNameFocused(false);
        setEmailFocused(true);
        setMessageFocused(false);
        break;
      case "message":
        setFullNameFocused(false);
        setEmailFocused(false);
        setMessageFocused(true);
        break;
      default:
        // Handle default case or errors here
        break;
    }
  };

  const handleBlur = () => {
    setFullNameFocused(false);
    setEmailFocused(false);
    setMessageFocused(false);
  };

  return (
    <div className="container mx-auto my-6 lg:flex gap-20">
      {/* image */}
      <div className=" lg:w-1/3">
        <img src="/assets/hero6.jpg" className="border rounded-lg h-[300px] lg:h-[600px] w-full object-cover" alt="" />
      </div>
      {/* Contact form */}
      <div className="flex mt-6 lg:w-2/3 flex-col my-auto w-full">
        <div className="flex flex-col items-center justify-content gap-6 lg:flex-row text-center lg:text-left mb-10">
          <h2 className="font-semibold text-3xl lg:w-1/2 lg:text-6xl">Contact</h2>
          <p className="text-xs lg:text-sm font-thin w-1/2 lg:w-1/4">
            The Kovac family has owned Furni also makes the property available
            on a limited basis for those in the commercial or fil industures
          </p>
          <p className="text-xs lg:text-sm w-1/2 font-thin lg:w-1/4">
            Partnering with reputable carpenters and making it all look credible
            and simple.This is the business model of the company and we want to
            hear your feedback about our products.
          </p>
        </div>
        <div className="flex ">
          <div className="w-1/2 text-center lg:text-left flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Tourist Visits</h3>
            <div>
              <p>Tuesday - Saturday</p>
              <p>9.00 am - 5.00 pm EST</p>
            </div>
            <div>
              <p>info@furni.com</p>
              <p>+234 900-000-0000</p>
              <p>+234 900-000-0000</p>
            </div>
          </div>
          <div className="flex text-center lg:text-left flex-col gap-4 w-1/2">
            <h3 className="text-2xl font-semibold">Commercial Requests</h3>
            <div className="w-full">
              <form className="flex items-center justify-center flex-col">
                <div className="relative mb-6 w-full">
                  <input
                    onFocus={() => handleFocus("fullName")}
                    onBlur={handleBlur}
                    className={
                      "border-b pb-2 focus-visible:outline-none w-full"
                    }
                    type="text"
                  />
                  <label
                    htmlFor=""
                    className={
                      isFullNameFocused
                        ? `absolute top-0 left-0 translate-y-[-10px] scale-75 transition ease-in-out delay-200`
                        : `absolute top-0 left-0 transition ease-in-out delay-200`
                    }
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative mb-6 w-full">
                  <input
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className="border-b pb-2 focus-visible:outline-none w-full"
                    type="email"
                  />
                  <label
                    htmlFor=""
                    className={
                      isEmailFocused
                        ? `absolute top-0 left-0 translate-y-[-10px] scale-75 transition ease-in-out delay-200`
                        : `absolute top-0 left-0 transition ease-in-out delay-200`
                    }
                  >
                    Email
                  </label>
                </div>
                <div className="relative mb-6 w-full">
                  <textarea
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    className="border-b pb-2 focus-visible:outline-none w-full"
                    type="text"
                  />
                  <label
                    htmlFor=""
                    className={
                      isMessageFocused
                        ? `absolute top-0 left-0 translate-y-[-10px] scale-75 transition ease-in-out delay-200`
                        : `absolute top-0 left-0 transition ease-in-out delay-200`
                    }
                  >
                    Message
                  </label>
                </div>
                <div
                  className="cursor-pointer flex text gap-4 items-center justify-center hover:text-green-500 w-full "
                  onClick={() => {
                    alert("Submitted");
                  }}
                >
                  <div className="h-[30px] w-[30px] border rounded-full flex items-center justify-center border-green-500">
                    <ArrowForward className="scale-100 text-xl rounded-full" />
                  </div>
                  Submit Request
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
