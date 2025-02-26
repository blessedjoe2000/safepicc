"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import toast from "react-hot-toast";

const FileUploader = ({ value, onChange, endpoint }) => {
  return (
    <div className="flex gap-10 items-center">
      {value && (
        <Image
          src={value}
          alt="course image"
          width={500}
          height={400}
          className="w-[280px] h-[200px] object-cover rounded-xl"
        />
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
