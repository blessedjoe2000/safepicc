"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import toast from "react-hot-toast";

const FileUploader = ({ value, onChange, endpoint }) => {
  return (
    <div className=" flex items-center gap-2">
      {value && (
        <Image
          src={value}
          alt="Uploaded file"
          width={280}
          height={200}
          className="w-[280px] h-[200px] object-cover rounded-lg"
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
