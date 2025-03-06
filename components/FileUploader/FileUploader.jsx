"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

const FileUploader = ({ value, onChange, endpoint }) => {
  return (
    <div className="">
      {value && <p>{value}</p>}

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
