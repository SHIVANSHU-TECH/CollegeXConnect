"use client";
import { CardContainer, CreateEvent } from "@/components/events/page";
import Card from "@/components/events/page";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
const api_url = process.env.NEXT_PUBLIC_API_URL;
const EventsPage = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${api_url}/v1/events/`);
        const data = await res.json();
        if (data.success) {
          const verifiedEvents = data.data.filter((event) => event.status === "VERIFIED");
          setAllEvents(verifiedEvents);
          console.log("Fetched events:", verifiedEvents);
        } else {
          console.error("Failed to fetch events:", data.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-12 w-full h-full py-6">
      <div className="flex flex-col sm:flex-row items-center justify-start text-white gap-2">
        <p className="text-center sm:text-left">Want to organize an event?</p>
        <CreateEvent />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
        <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-gray-400 text-center sm:text-left">
          Events happening right now
        </h3>

        <div className="hidden sm:block">
          <svg
            width="35"
            height="35"
            viewBox="0 0 20 10"
            fill="none"
            className="text-gray-400 font-bold hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full flex justify-center sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[320px] sm:max-w-none">
          {allEvents.map((event) => (
            <CardContainer
              key={event.title}
              title={event.title}
              deadlineDate={format(new Date(event.deadlineDate), "PPP")}
              description={event.description}
              eventLink={event.eventLink}
              image={event.mediaUrl}
              className="bg-base-100 text-white border"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsPage;