"use client";
// import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldrdkyd");

  return (
    <div className=" container mx-auto justify-around pt-16 md:pl-20  xl:pl-28 text-base-content">
      <div className="flex flex-col md:flex-row  items-center md:gap-20 xl:gap-40">
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6"
          method="POST"
          action="https://formspree.io/f/xldrdkyd"
        >
          <span className="pt-10">Name</span>
          <div>
            <input
              type="text"
              className="input w-full shadow-lg shadow-black"
              name="Name"
            />
          </div>
          <span>Email</span>

          <input
            type="email"
            className="input shadow-lg shadow-black"
            name="email"
          />
          <span>Message</span>

          <textarea
            className="textArea rounded-lg p-4 w-full bg-base-100 focus:ring-2 focus:ring-primary focus:outline-none shadow-lg shadow-black"
            name="message"
            rows="5"
          ></textarea>
          <button
            className="submit-button btn btn-wide shadow-lg shadow-black"
            type="submit"
            disabled={state.submitting}
          >
            <div className="justify-around flex items-center">
              {state.succeeded ? "Success✅" : "Submit"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="submit-svg h-7 w-7 arrow-svg" // Added 'arrow-svg' class here
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>

          <style jsx>{`
            /* Initially hide the arrow */
            .arrow-svg {
              opacity: 0;
              transform: translateX(
                -10px
              ); /* Hide the arrow a little bit to the left */
              transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth animation */
            }

            /* Show arrow on hover and move slightly to the right */
            .submit-button:hover .arrow-svg {
              opacity: 1;
              transform: translateX(5px); /* Move to the right */
            }

            /* Additional styling for the button */
            .submit-button {
              cursor: pointer;
            }
          `}</style>
        </form>
        <div className="md:flex-1 items-center justify-start   ">
          <h1 className=" md:text-5xl text-5xl  pt-10 md:pt-0 lg:text-7xl text-center md:text-start mb-5 font-bold ">
            Contact Us
          </h1>
          <p className=" lg:w-4/6  text-2xl mb-10 ">
            Contact us for questions,technical assistance, or collaboration
            opportunities via the Contact information provided.
          </p>
          <div>
            <div className="md:pl-2 flex items-center gap-12  mb-3 list-none">
              <a
                href="https://www.whatsapp.com/channel/0029Vak33pQJ3jv7QEoyuY1C"
                className="flex gap-2 align-middle flex-shrink-0"
              >
                <div className="align-middle flex pt-1">
                  <IoLogoWhatsapp />
                </div>

                <li>Whatsapp</li>
              </a>
              <a
                href="https://x.com/CollegeXconnect"
                className="flex-shrink-0 flex gap-2"
              >
                <div className=" -ml-3 pt-1">
                  <BsTwitterX />
                </div>
                <li>Twitter</li>
              </a>
            </div>
            <div className="flex md:pl-2 items-center gap-12  mb-3 list-none">
              <a
                href="https://www.linkedin.com/company/college0connect/posts/?feedView=all"
                className="flex-shrink-0 flex gap-2"
              >
                <div className=" pt-1">
                  <FaLinkedin />
                </div>

                <li>LinkedIn</li>
              </a>
              <a
                href="https://www.instagram.com/college_x_connect"
                className="flex-shrink-0 flex gap-2"
              >
                <div className=" pt-1">
                  <FaInstagram />
                </div>
                <li>Instagram</li>
              </a>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <span className=" md:flex items-center justify-center bg-base-100 rounded-full md:w-8 md:h-8">
                <TfiEmail />
              </span>
              <span>collegeconnect.tech@gmail.com</span>
            </div>
            <div className="flex items-center gap-1 mb-3">
              <span className=" flex items-center justify-center bg-base-100 rounded-full md:w-8 md:h-8">
                <IoLocationOutline />
              </span>
              <span>Ghitorni, new Delhi -110030 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
