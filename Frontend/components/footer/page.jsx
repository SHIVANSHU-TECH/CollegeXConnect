"use client";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_URL;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const subscribeToNewsletter = async () => {
      if (submitted) {
        try {
          const response = await axios.post(
            `${base_url}/v1/newsletter/subscribe`,
            { email }
          );
          setStatus(response.data.message);
          toast({
            title: "Success",
            description: response.data.message,
          });
        } catch (error) {
          setStatus(error.response?.data?.message);
          toast({
            title: "Error",
            description: error.response?.data?.message,
            variant: "destructive",
            action: <ToastAction altText="Try again">Try Again</ToastAction>,
          });
        } finally {
          setSubmitted(false);
        }
      }
    };

    subscribeToNewsletter();
  }, [submitted, email]);

  const handleSubscribe = () => {
    if (email) {
      setSubmitted(true); // Trigger the effect to make the API call
    } else {
      setStatus("Please enter a valid email.");
    }
  };
  return (
    <div className="h-full md:flex pt-20 md:pt-20 pb-10 md:pb-20  text-white relative overflow-hidden">
      <div className="md:w-1/2">
        <div className="flex justify-around pb-10 border-r border-b align-middle">
          <div className="  w-2/5 h-3/5 md:full md:w-1/4  ">
            <img
              className="w-full h-full"
              alt="logo"
              src="white-logo.png"
            ></img>
          </div>
          {/* <p className="pt-2 text-xs w-1/3">
            Because if your workspace software can&rsquo;t handle of the current
            disruption,neither will your workspace
          </p> */}
        </div>
        <div className="flex justify-around leading-6 md:pb-20 text-xs list-none pt-8  border-r border-b pb-10">
          <div className="pb-5 md:pb-0  z-10">
            <li className="  font-bold text-sm leading-10  ">Resources</li>
            <div className="">
            <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/intro">
                <li>Why CollegeXConnect ?</li>
              </Link>
              <Link href="/Suggestion">
                <li>Suggestion</li>
              </Link>
              <Link href="/Event">
                <li>Events</li>
              </Link>
              <Link href="/notes">
               <li className="hidden sm:block">Notes</li>
              </Link>
            </div>
          </div>
          <div className="pb-5 md:pb-0">
            <li className="font-bold text-sm leading-10 ">Company</li>
            <div className=" ">
              <Link href="/about">
                <li>About Us</li>
              </Link>
              <Link href="/career">
                <li>Careers</li>
              </Link>
              <Link href="/Leadership">
                <li>Leadership</li>
              </Link>
              <Link href="/partner">
                <li>Partners</li>
              </Link>
              
              <Link href="/contact">
                <li>Contact Us</li>
              </Link>
            </div>
          </div>
          <div>
            <li className="font-bold text-sm leading-10 ">Social</li>
            <div className="">
              <a
                href="https://www.whatsapp.com/channel/0029Vak33pQJ3jv7QEoyuY1C"
                className="flex gap-2 align-middle flex-shrink-0"
              >
                <div className="align-middle flex pt-2">
                  <IoLogoWhatsapp />
                </div>

                <li>Whatsapp</li>
              </a>
              <a
                href="https://x.com/CollegeXconnect"
                className="flex-shrink-0 flex gap-2"
              >
                <div className=" pt-2">
                  <BsTwitterX />
                </div>
                <li>Twitter</li>
              </a>
              <a
                href="https://www.linkedin.com/company/college0connect/posts/?feedView=all"
                className="flex-shrink-0 flex gap-2"
              >
                <div className=" pt-2">
                  <FaLinkedin />
                </div>

                <li>LinkedIn</li>
              </a>
              <a
                href="https://www.instagram.com/college_x_connect"
                className="flex-shrink-0 flex gap-2"
              >
                <div className=" pt-2">
                  <FaInstagram />
                </div>
                <li>Instagram</li>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:pl-20 md:w-1/2 pt-3 md:pt-0  ">
        <p className=" lg:text-5xl text-2xl  md:text-4xl text-center leading-snug md:leading-normal lg:leading-normal  md:w-2/3 ">
          Subscribe to Newsletter
        </p>
        <div className="pl-10 md:pl-0 md:pt-5 relative  w-11/12 pt-2 ">
          <input
            className="px-8  py-4 w-full rounded-full "
            type="email"
            placeholder="Enter your Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button
            className="absolute  right-2 bottom-2 md:bottom-2 bg-orange-600 h-10 w-10 rounded-full"
            onClick={handleSubscribe}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9  transform hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 20 20"
              // fill=""
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute h-3/6 hidden md:block right-0 -bottom-5">
        <img className="w-full h-full" src="girl.png" alt="img"></img>
      </div>
      <div className="absolute hidden md:block md:left-1/4  lg:right-2/4  md:h-3/6  -bottom-20">
        <img className=" h-full" src="women.png" alt="img"></img>
      </div>
      <div className="absolute -left-4 bottom-0 xl:block hidden h-4/6">
        <img src="coconut_tree.png" className="w-full h-full" alt="img"></img>
      </div>
    </div>
  );
};

export default Footer;
