"use client";
import React, { FC } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type RichTextInputProps = {
  content: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  label: string;
};
const RichTextInput: FC<RichTextInputProps> = ({
  content,
  onChange,
  label,
  className = "sm:col-span-2",
}) => {
  //Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-slate-800 dark:text-slate-50"
      >
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default RichTextInput;
