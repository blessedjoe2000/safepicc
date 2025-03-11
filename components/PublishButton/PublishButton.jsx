"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const PublishButton = ({ disabled, isPublished, courseId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    const url = `/api/courses/${courseId}`;

    try {
      setIsLoading(true);
      isPublished
        ? await axios.patch(`${url}/unpublish`)
        : await axios.patch(`${url}/publish`);
      toast.success(
        `course ${isPublished ? "unpublished" : "published"} successfully`
      );
      router.push("/admin/courses");
    } catch (error) {
      console.log(
        `Failed to ${isPublished ? "unpublish" : "publish"}  `,
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <Loader2 /> : isPublished ? "Unpublish" : "Publish"}
    </Button>
  );
};

export default PublishButton;
