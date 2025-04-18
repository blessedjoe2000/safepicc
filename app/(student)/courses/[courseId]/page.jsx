"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";

const CourseOverview = () => {
  const { userId, isLoaded } = useAuth();
  const { user } = useUser();
  const searchParams = useSearchParams();

  const router = useRouter();
  const path = usePathname();
  const [course, setCourse] = useState([]);
  const [purchase, setPurchase] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCourse, setIsLoadingCourse] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);

  const courseId = path.split("/").pop();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [userId, isLoaded, router]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const getCourse = async () => {
      try {
        setIsLoadingCourse(true);
        const response = await axios.get(`/api/courses/${courseId}`);
        const data = response.data;
        setCourse(data.course);
        setPurchase(data.purchase);
        setHasPurchased(!!data.purchase);
        setIsLoadingCourse(false);
      } catch (error) {
        console.log("error fetching course by id ", error);
      }
    };

    getCourse();
  }, [courseId]);

  useEffect(() => {
    if (hasMounted && !isLoadingCourse && !course?.id) {
      router.push("/courses");
    }
  }, [course?.id, isLoadingCourse, router]);

  useEffect(() => {
    const successParam = searchParams.get("success");
    if (successParam === "true") {
      setPaymentSuccess(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const confirmPayment = async () => {
      if (paymentSuccess) {
        try {
          await axios.post(`/api/courses/${courseId}/update-purchase`);
          setHasPurchased(true);
        } catch (error) {
          console.error("Error verifying payment", error);
        }
      }
    };

    confirmPayment();
  }, [paymentSuccess, hasPurchased]);

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

  const handleVideoComplete = async () => {
    try {
      const response = await axios.post(`/api/courses/${courseId}/complete`, {
        user,
      });
      if (response.data?.success) {
        toast.success(
          "Course completed. Your certificate will be sent to your email shortly."
        );
      } else if (response.data?.alreadyCompleted) {
        toast.success("Course completed.");
      }
    } catch (error) {
      console.error("Error sending completion event", error);
      toast.error("Failed to notify admin.");
    }
  };

  if (!hasMounted) return null;

  if (isLoaded && isLoadingCourse) {
    return (
      <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
        <div className="flex justify-center p-5">
          <Skeleton className="h-10 w-[200px] " />
        </div>

        <div className="flex gap-2 p-5">
          <Skeleton className="h-10 w-[60px] " />
          <Skeleton className="h-10 w-[100px] " />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <Skeleton className="h-10 w-[150px] " />
          <Skeleton className="h-40 w-full " />
        </div>
        <div className="flex flex-col gap-2 p-5">
          <Skeleton className="h-10 w-[150px] " />
          <Skeleton className="h-100 w-full " />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {!hasPurchased && (
        <div className="absolute top-0 left-0 w-full h-full bg-main-teal bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
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
                onEnded={handleVideoComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
