import { NewCategoryInputs } from "@/lib/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

const TextInput: React.FC<{
  label: string;
  name: string;
  register: any;
  errors: any;
  isRequired?: boolean;
  type?: string;
  className?: string;
  defaultValue?: string;
}> = ({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) => {
  return (
    <div className={className}>
      {" "}
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-3 dark:bg-slate-600 text-slate-800 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-slate-400  focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
};
export default TextInput;
