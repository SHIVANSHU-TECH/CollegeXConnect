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
import { LiaSpinnerSolid } from "react-icons/lia";
import { ToastAction } from "@/components/ui/toast";
const base_url = process.env.BASE_URL;
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      toast({
        title: "Login Successful!",
      });
      setIsLoading(false);
      router.push("/");
    } else {
      setError("Invalid credentials");
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden lg:max-h-full mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover object-cover p-8">
            <Image src={Logo} alt="logo" className="h-full" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              College X Connect
            </h2>

            {/* <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 w-full"
            >
              <div className="px-4 py-3">
                <FaGoogle color="red" />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </button> */}

            {/* <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div> */}

            <form onSubmit={handleSubmit}>
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
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 flex items-center justify-center gap-4"
                >
                  {isLoading ? "Loading" : "Sign in"}
                  <span>
                    {isLoading ? <LiaSpinnerSolid /> : <GoArrowUpRight />}
                  </span>
                </button>
              </div>
            </form>

            {error && <p className="mt-4 text-red-600 text-center">{error}</p>}

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don &apos; t have an account?{" "}
                <a href="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
