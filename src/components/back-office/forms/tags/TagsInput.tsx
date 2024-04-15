"use client";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import Button from "../Button";
import TextButton from "../TextButton";

type TagsInputProps = {
  name: string;
  label: string;
  className?: string;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};
const TagsInput: FC<TagsInputProps> = ({
  name,
  label,
  className = "sm:col-span-2",
  setTags,
}) => {
  const [addTag, setAddTag] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const handleAddTag = (e: any) => {
    e.preventDefault();
    if (!tag) return;
    setTags((tags) => [...tags, tag]);
    setAddTag(false);
    setTag("");
  };
  return (
    <div className={className}>
      {addTag ? (
        <div className="flex flex-col">
          <label
            htmlFor={name}
            className="flex justify-between text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 "
          >
            {label}
            <TextButton
              buttonTitle={<X className=" w-4 h-4" />}
              onClick={() => setAddTag(false)}
              className="rounded-full w-6 h-6 items-center justify-center"
            />
          </label>

          <input
            type="text"
            name={name}
            id={name}
            autoComplete={name}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="block w-full rounded-md border-0 py-3 dark:bg-transparent text-slate-800 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-slate-400  focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            placeholder={`Type the ${label.toLowerCase()}`}
          />
          <div className="self-end">
            <Button buttonTitle="Add tag" onClick={handleAddTag} />
          </div>
        </div>
      ) : (
        <TextButton
          icon={<Plus />}
          buttonTitle="Add tag"
          type="button"
          onClick={() => setAddTag(!addTag)}
          className="px-3 rounded-md py-2"
        />
      )}
    </div>
  );
};

export default TagsInput;
