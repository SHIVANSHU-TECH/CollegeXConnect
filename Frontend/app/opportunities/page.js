"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CreateOpportunity } from "@/components/opportunities/page";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomDialogModal from "../../components/Dialog/index";

const api_url = process.env.NEXT_PUBLIC_API_URL;

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [renderFullDescription, setRenderFullDescription] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({ title: "", description: "" });
  const openDialog = () => {
    setDialogData({ title: "Modal Title", description: "Modal Description" });
    setIsDialogOpen(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${api_url}/v1/jobs/`);
        const data = await res.json();
        if (data.success) {
          let currentDate = new Date().toJSON().slice(0, 10);
          const verifiedJobs = data.data.filter(
            (job) =>
              job.status === "VERIFIED" && job.deadlineDate >= currentDate
          );
          setJobs(verifiedJobs);
          console.log("ALL jobs", verifiedJobs);
          console.log("Fetched jobs:", verifiedJobs);
        } else {
          console.error("Failed to fetch jobs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDialogOpen]);

  const handleDialogData = (item) => {
    setDialogData(item);
    setIsDialogOpen(true);
  };
  return (
    <main className="flex flex-col gap-7 px-4 sm:px-6 md:px-8 lg:px-12 w-full h-full py-2 bg-primary">
      <div className="flex flex-col items-center justify-center pt-52  bg-primary px-2">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
          Opportunities are like sunrises.
          <br /> If you wait too long, you miss them.
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Get Exclusive offers on purchase of any plans
        </p>
        <div className="flex items-center justify-center w-full max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            className=" rounded-full px-4 py-2 w-full focus:outline-none text-white"
          />
          <button className="ml-4 bg-black hover:bg-gray-800 text-white rounded-3xl w-full sm:w-48 py-3 px-1 sm:px-3 flex items-center justify-between">
            <span className="pr-3 pl-4 sm:pl-5 flex-grow text-center">
              Sign Up
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
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
      <div className="text-white text-xl sm:text-2xl pl-6 text-left pt-24">
        <p className="text-4xl font-semibold sticky">
          Find the latest job opportunities here.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-start text-black">
        <div className="flex justify-center items-center p-4">
          <div className="transform -skew-x-12 bg-[#b2c9ed] rounded-lg overflow-hidden shadow-lg w-full max-w-md">
            <div className="transform skew-x-12 py-3 px-4 sm:px-6 flex flex-wrap items-center justify-between">
              <span className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">
                Have a Job opening?
              </span>
              <CreateOpportunity />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.length > 0 &&
          jobs.map((job, index) => (
            <Card
              key={job.id}
              className="w-70 h-90 bg-gray-800 text-white border-none flex-col justify-between"
            >
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-lg text-white sm:text-xl">
                    {job.title.toUpperCase()}
                  </CardTitle>
                  <CardTitle className="text-sm text-white sm:text-base">
                    Posted By: {job.companyName}
                  </CardTitle>
                  <CardTitle className="text-sm sm:text-base">
                    Deadline Date: {format(new Date(job.deadlineDate), "PPP")}
                  </CardTitle>
                </div>
                <hr className=""></hr>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-md font-normal line-clamp-3 text-gray-400">
                  {job.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-[#b4b2ed] font-semibold text-base text-black hover:bg-[#9d9ae3] w-50">
                    Apply
                  </Button>
                </a>
                <a className="w-full">
                  <Button
                    className="bg-[#b4b2ed]  text-base text-black hover:bg-[#9d9ae3] w-full"
                    onClick={() => handleDialogData(job)}
                  >
                    {renderFullDescription ? "Hide" : "Show More"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        {isDialogOpen && (
          <CustomDialogModal
            isOpen={isDialogOpen}
            title={dialogData.title}
            description={dialogData.description}
            taskLink={dialogData.taskLink}
            btnText="Close"
            btnTask="View Task"
            handleClose={() => setIsDialogOpen(false)}
          />
        )}
      </div>
    </main>
  );
}

export default Jobs;
