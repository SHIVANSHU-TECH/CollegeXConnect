// app/signin/page.js

// import { getSession } from "next-auth/react";

// export async function getServerSideProps(context) {
//   const session = await getSession(context)

//   if(session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Logo from "@/public/secure.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { LiaSpinnerSolid } from "react-icons/lia";
const api_url = process.env.NEXT_PUBLIC_API_URL;
const base_url = process.env.BASE_URL;
export default function SignInPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Send the registration request to your backend API
      const res = await axios.post(`${api_url}/v1/user/register`, {
        name,
        email,
        password,
        college,
        branch,
        year,
      });

      // Check if email already exists or registration is successful
      if (
        res.data.success === false &&
        res.data.message === "Email already exists"
      ) {
        setError(res.data.message);
        toast({
          title: "Email Already Exists",
          description:
            "The email you entered is already registered. Please sign in or use another email.",
          variant: "destructive",
        });
        setIsLoading(false);
        return; // Stop further execution if email is already registered
      }

      // Registration is successful, prompt user to verify email
      if (res.data.success === true) {
        toast({
          title: "Registration Successful!",
          description:
            "We have sent you an email for verification of your profile. You cannot log in without verifying your account.",
        });
        router.push("/signin"); // Redirect to signin page after registration
      }
    } catch (error) {
      // Handle unexpected errors
      setError("An error occurred. Please try again.");
      toast({
        title: "Error",
        description:
          "Something went wrong while registering. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover object-cover">
            <Image src={Logo} alt="logo" className="h-full" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  College
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Branch
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Year of Study
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 flex items-center justify-center gap-4"
                >
                  {isLoading ? "Loading" : "Sign up"}
                  <span>
                    {isLoading ? <LiaSpinnerSolid /> : <GoArrowUpRight />}
                  </span>
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a href="/signin" className="text-blue-500 hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
