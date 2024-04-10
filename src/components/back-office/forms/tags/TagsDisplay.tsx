import { X } from "lucide-react";
import { FC } from "react";
import TextButton from "../TextButton";

type Props = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagsDisplay: FC<Props> = ({ tags, setTags }) => {
  const handleDeleteTag = (tag: string) => {
    setTags((tags: string[]) => tags.filter((t: string) => t !== tag));
    console.log("tag");
  };
  return (
    <div className="flex flex-wrap space-x-2 sm:col-span-2 gap-y-2">
      {tags.map((tag: string, i: number) => {
        return (
          <div
            key={i}
            className=" flex gap-2 items-center text-slate-700 dark:text-slate-50 bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-4 py-2  dark:bg-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-700 dark:border-slate-700"
          >
            <span>{tag}</span>
            <TextButton
              buttonTitle={<X className="w-4 h-4" />}
              onClick={() => handleDeleteTag(tag)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TagsDisplay;
