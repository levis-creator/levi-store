"use client";
import Heading from "@/components/back-office/Heading";
import TextInput from "@/components/back-office/forms/TextInput";
import { useForm } from "react-hook-form";
import React from "react";
import { NewCategoryInputs } from "@/lib/types";

const Page = () => {
  const {
    register,
    formState: { errors },
  } = useForm<NewCategoryInputs>();
  return (
    <div>
      {/* header */}
      <Heading title="New category" returnBtn={true} />
      {/* table */}
      <form className="w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Category Title"
            register={register}
            errors={errors}
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
