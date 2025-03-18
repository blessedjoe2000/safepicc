"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import ReactPlayer from "react-player";

const CourseOverview = () => {
  const { userId } = useAuth();
  const path = usePathname();
  const [course, setCourse] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const courseId = path.split("/").pop();

  if (!userId) {
    return redirect("/sign-in");
  }

  useEffect(() => {
    const getCourse = async () => {
      const response = await axios.get(`/api/courses/${courseId}`);
      const data = response.data;
      setCourse(data.course);
      setPurchase(data.purchase);
    };

    getCourse();
  }, []);

  if (!course) {
    redirect("/courses");
  }

  const buyCourse = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/courses/${courseId}/checkout`);
      window.location.assign(response.data.url);
      setIsLoading(false);
    } catch (error) {
      console.log("error checkout course", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative">
      {!purchase && (
        <div className="absolute top-0 left-0 w-full h-full bg-main-teal bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-50">
          <Button className="z-50" onClick={buyCourse}>
            {isLoading && <Loader2 className="animate-spin h-4 w-4" />} Buy this
            course
          </Button>
        </div>
      )}
      <div className=" lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <div className="text-2xl font-bold pb-5 text-center">
          {course.title}
        </div>
        <div className="flex gap-2 pb-5">
          <div className="font-bold">Price:</div>
          <div>${course.price} </div>
        </div>
        <div className="flex flex-col gap-2 pb-5">
          <div className="font-bold">Description:</div>
          <div className="px-5">{course.description} </div>
          <div>
            <div className="font-bold">Video:</div>
            <div className="my-2">
              <ReactPlayer
                url={course.videoUrl}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
