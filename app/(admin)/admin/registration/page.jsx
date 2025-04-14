"use client";

import { registration_columns } from "@/components/Courses/Columns/Columns";
import { DataTable } from "@/components/Courses/DataTable/DataTable";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

const Registration = () => {
  const { userId } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!userId) {
    return redirect("/sign-in");
  }

  useEffect(() => {
    const getBookings = async () => {
      setIsLoading(true);
      const calApiKey = process.env.NEXT_PUBLIC_CAL_API_KEY;
      try {
        const response = await axios.get(
          `https://api.cal.com/v1/bookings?apiKey=${calApiKey}`
        );

        setBookings(response.data.bookings);
        setIsLoading(false);
      } catch (error) {
        console.log("error fetching bookings :>> ", error);
      }
    };

    getBookings();
  }, []);

  if (isLoading) {
    return (
      <div className="md:mt-5 md:px-10 xl:px-16 pb-16">
        <div className="flex justify-end pb-5 p-5">
          <Skeleton className="h-10 w-[200px] " />
        </div>
        <div className="pb-5 px-5">
          <Skeleton className="h-10 w-1/3 " />
        </div>

        <div className="flex flex-col gap-2 px-5">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
      {bookings.length === 0 && <div>No Booking available</div>}

      <div className="">
        <DataTable columns={registration_columns} data={bookings} />
      </div>
    </div>
  );
};

export default Registration;
