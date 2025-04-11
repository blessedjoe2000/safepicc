"use client";

import Calender from "@/components/Calender/Calender";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Appointment = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const calConfigData = [
    {
      namespace: "Intravenous-iv-therapy-class",
      calLink: "joseph-ugiagbe-s5r5io/intravenous-iv-therapy-class",
    },
    {
      namespace: "Picc-and-midline-insertion-class",
      calLink: "joseph-ugiagbe-s5r5io/picc-and-midline-insertion-class",
    },
    // add more course configs here
  ];

  useEffect(() => {
    if (!selectedCourse && calConfigData.length > 0) {
      setSelectedCourse(calConfigData[0]);
    }
  }, [selectedCourse]);

  return (
    <div className="md:mt-5 md:px-10 xl:px-16 pb-16 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Select a Course</h2>

      <div className="flex flex-wrap gap-4">
        {calConfigData.map((data) => (
          <Button
            key={data.namespace}
            variant={
              selectedCourse?.namespace === data.namespace
                ? "default"
                : "outline"
            }
            onClick={() => setSelectedCourse(data)}
          >
            {data.namespace.replace(/-/g, " ")}
          </Button>
        ))}
      </div>

      {selectedCourse && (
        <div className="mt-6">
          <Calender
            key={selectedCourse.namespace}
            namespace={selectedCourse.namespace}
            calLink={selectedCourse.calLink}
          />
        </div>
      )}
    </div>
  );
};

export default Appointment;
