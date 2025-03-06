"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ComboBox/ComboBox";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FileUploader from "@/components/FileUploader/FileUploader";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required " }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  description: z.string(),
  videoUrl: z.string(),
  price: z.string().min(2, { message: "Price is required" }),
});

const CreateCourseForm = ({ categories }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      categoryId: "",
      description: "",
      videoUrl: "",
      price: "",
    },
  });

  async function onSubmit(values) {
    try {
      setIsLoading(true);
      await axios.post("/api/courses", values);
      setIsLoading(false);
      toast.success(`New course created successfully`);
      router.push(`/admin/courses`);
    } catch (error) {
      console.log("failed creating new course :>> ", error);
      return toast.error("Something went wrong");
    }
  }

  return (
    <div className="p-10">
      <p className="text-lg font-semi-bold">
        Enter the basic information of your course
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-10"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter course title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Combobox
                    options={categories}
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    className="border p-2 rounded-md w-full h-32" // Adjust styling as needed
                    placeholder="What does this course entail?"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Course Video</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value || ""}
                    onChange={(url) => field.onChange(url)}
                    endpoint="courseVideo"
                    page="Edit Course"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Price (USD)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="$39.99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            {isLoading && <Loader2 className=" animate-spin" />} Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm;
