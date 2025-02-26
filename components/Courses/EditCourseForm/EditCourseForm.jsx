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
import RichEditor from "@/components/RichEditor/RichEditor";
import FileUploader from "@/components/FileUploader/FileUploader";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required " }),
  categoryId: z.string().min(2, { message: "Category is required " }),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  price: z.coerce.number().optional(),
});

const EditCourseForm = ({ course, categories, courseBanner }) => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: course.title,
      categoryId: course.categoryId,
      description: course.description || "",
      imageUrl: course.imageUrl || "",
      price: course.price || undefined,
    },
  });

  async function onSubmit(values) {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/admin/courses/${response.data.id}/basic`);
      toast.success(`New course created successfully`);
    } catch (error) {
      console.log("failed creating new course :>> ", error);
      return toast.error("Something went wrong");
    }
    console.log("The values", values);
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
                  <RichEditor
                    placeholder="What does this course entails? "
                    {...field}
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
                <FormLabel>Course Image</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value || ""}
                    onChange={(url) => field.onChange(url)}
                    endpoint="courseBanner"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditCourseForm;
