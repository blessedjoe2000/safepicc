"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useRouter } from "next/navigation";

const Calender = ({ namespace, calLink }) => {
  const { userId, isLoaded } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [userId, isLoaded, router]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace,
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [namespace]);
  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
      }}
    />
  );
};

export default Calender;
