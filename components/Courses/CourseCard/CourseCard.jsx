"use client";

import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div>
      <div className="border-1 rounded-lg shadow-lg w-[350px] flex flex-col">
        <Link href={`/courses/${course.id}`} className="flex flex-col">
          <Image
            src={course.imageUrl ? course.imageUrl : "/image_placeholder.webp"}
            alt="course-title"
            width={500}
            height={300}
            className="rounded-t-xl w-full h-[180px] object-cover"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg hover:text-main-teal">
              {course.title}
            </h2>
            <p className=" font-semibold">${course.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
