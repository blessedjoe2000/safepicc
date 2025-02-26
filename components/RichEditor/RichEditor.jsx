import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

const RichEditor = ({ placeholder, onChange, value }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <ReactQuill
      theme="snow"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default RichEditor;
