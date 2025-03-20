"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ComboBox/ComboBox";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FileUploader from "@/components/FileUploader/FileUploader";
import Link from "next/link";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PublishButton from "@/components/PublishButton/PublishButton";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required " }),
  categoryId: z.string().min(2, { message: "Category is required " }),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  videoUrl: z.string().optional(),
  price: z.coerce.number().optional(),
});

const EditCourseForm = ({ course, categories, isCompleted }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: course.title,
      categoryId: course.categoryId,
      description: course.description || "",
      imageUrl: course.imageUrl || "",
      videoUrl: course.videoUrl || "",
      price: course.price || undefined,
    },
  });

  async function handleDelete() {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/courses/${course.id}`);
      setIsDeleting(false);
      toast.success(`course deleted successfully`);
      router.push("/admin/courses");
    } catch (error) {
      console.log("failed deleting course :>> ", error);
      return toast.error("Something went wrong...");
    }
  }

  async function onSubmit(values) {
    try {
      setIsLoading(true);
      await axios.patch(`/api/courses/${course.id}`, values);
      setIsLoading(false);
      toast.success(`course updated successfully`);
      router.push("/admin/courses");
    } catch (error) {
      console.log("failed updating course :>> ", error);
      return toast.error("Something went wrong...");
    }
  }

  return (
    <div className="">
      <div className="flex sm:flex-row flex-col justify-between  gap-5">
        <p className="text-lg font-semi-bold">
          Enter the basic information of your course
        </p>
        <div className="flex items-center gap-2">
          <PublishButton
            disabled={!isCompleted}
            courseId={course.id}
            isPublished={course.isPublished}
          />
          {isDeleting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button type="button">
                  <Trash className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-main-red">
                    Confirm Delete?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This course will be deleted permanently.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>

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
                <FormLabel>
                  Title<span className="text-main-red">*</span>
                </FormLabel>
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
                <FormLabel>
                  Category<span className="text-main-red">*</span>
                </FormLabel>
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
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>
                  Course image <span className="text-main-red">*</span>
                </FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value || ""}
                    onChange={(url) => field.onChange(url)}
                    endpoint="courseImage"
                    page="image"
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
                <FormLabel>
                  Upload Course Video <span className="text-main-red">*</span>
                </FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value || ""}
                    onChange={(url) => field.onChange(url)}
                    endpoint="courseVideo"
                    page="video"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {course?.videoUrl && (
            <div className="my-5 flex justify-center">
              <ReactPlayer
                url={course.videoUrl}
                controls
                width="100%" // Full width on small screens
                height="100%"
                className="max-w-[600px]" // Restricts to 600px on larger screens
              />
            </div>
          )}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>
                  Price (USD)<span className="text-main-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="$39.99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-5">
            <Link href="/admin/courses">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit">
              {isLoading && <Loader2 className=" animate-spin" />} Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditCourseForm;
