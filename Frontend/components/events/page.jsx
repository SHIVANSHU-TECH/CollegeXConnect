"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import axios from "axios"
const api_url = process.env.NEXT_PUBLIC_API_URL;
const CardContainer = ({ title, description, image, deadlineDate, eventLink }) => {
  // const [currState, setCurrState] = useState(state);

  return (
    <Card className="w-full px-6 py-8 max-w-[320px] bg-base-100 text-white border border-sky-200 outline-none flex flex-col items-center justify-center gap-3">
      <CardContent>
        <Image src={image} alt="sample" width={252} height={200} className="rounded" />
      </CardContent>
      <CardTitle>{title}</CardTitle>
      <CardTitle>Date: {deadlineDate}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <a href={eventLink}><Button className="bg-purple-400 hover:bg-purple-500">
        Participate Now
      </Button></a>
    </Card>
  );
};

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("TECHNICAL");
  const [eventLink, setEventLink] = useState("");
  const [mediaFile, setMediaFile] = useState({})
  const [isOpen,setIsOpen] = useState(false)
  const {toast} = useToast()

  const createEvent = async (e) => {
    e.preventDefault();
    const data = { title, deadlineDate, description, category, eventLink };
    const formData = new FormData()

    formData.append("title", title)
    formData.append("deadlineDate", deadlineDate)
    formData.append("description",description)
    formData.append("eventLink", eventLink)
    formData.append("category", category)
    formData.append("media", mediaFile)


    try {
      const res = await axios.post(`${api_url}/v1/events`, formData       
  );

      if (!res) {
        throw new Error("Failed to create event");
      }

      setIsOpen(false);
      toast({
        title: "Success",
        description: "Event created successfully and sent for approval",
      });

      // Reset form fields
      setTitle("");
      setDeadlineDate("");
      setDescription("");
      setCategory("TECHNICAL");
      setMediaFile(null);
      setEventLink("");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create event",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }
  
  
return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <p className="text-slate-300 cursor-pointer ">Create Event</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={createEvent}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
              placeholder="Enter name of event"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
              placeholder="Enter description of the event"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="eventDate" className="text-right">
              Event Date
            </Label>
            <Input
              id="eventDate"
              type="date"
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
              className="col-span-3"
              placeholder="Enter the date of event"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 text-base-content">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="col-span-3"
              required
            >
              <option value="TECHNICAL">Technical</option>
              <option value="CULTURAL">CULTURAL</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="media" className="text-right">
              Image
            </Label>
            <Input
              id="media"
              type="file"
              onChange={(e) => setMediaFile(e.target.files[0])}
              className="col-span-3"
              accept="image/*"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="eventLink" className="text-right">
              Registration Link
            </Label>
            <Input
              id="eventLink"
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
              className="col-span-3"
              placeholder="Enter the full URL for registration"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Send for approval</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { CardContainer, CreateEvent };
