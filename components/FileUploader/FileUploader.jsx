"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import toast from "react-hot-toast";

const FileUploader = ({ value, onChange, endpoint, page }) => {
  return (
    <div className=" flex sm:flex-row flex-col items-center gap-2 px-5">
      {page === "image" && value !== "" && (
        <Image
          src={value}
          alt="Uploaded file"
          width={280}
          height={200}
          className="w-[280px] h-[200px] object-cover rounded-lg"
        />
      )}

      {page === "video" && value !== "" && (
        <p className="text-main-green">Video uploaded successfully</p>
      )}

      <UploadDropzone
        className="w-[280px] h-[200px]"
        endpoint={endpoint}
        onClientUploadComplete={(res) => onChange(res?.[0].ufsUrl)}
        onUploadError={(error) => {
          console.log("error uploading image :>> ", error);
          toast.error("Something went wrong");
        }}
      />
    </div>
  );
};

export default FileUploader;
