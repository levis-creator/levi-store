"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/forms/Button";
import TextAreaInput from "@/components/forms/TextAreaInput";
import TextInput from "@/components/forms/TextInput";
import ToggleInput from "@/components/forms/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { Farmer } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Farmer>({
    defaultValues: {
      isActive: true,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const isActive = watch("isActive");

  // this is handling submit
  const onSubmit: SubmitHandler<Farmer> = async (data) => {
    await makePostRequest({
      setLoading,
      endpoint: "api/farmers",
      data,
      resourceName: "Farmers",
      reset,
      redirect: () => router.push("/dashboard/farmers"),
    });
  };

  return (
    <div>
      {/* header */}
      <Heading title="New Farmer" returnBtn={true} handleBack={router.back} />
      {/* table */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="name"
            label="Farmer's Full Name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            name="phone"
            label="Farmer's Phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />{" "}
          <TextInput
            label="Farmer's Contact Person Phone Number"
            name="contactPersonPhone"
            register={register}
            errors={errors}
            className="w-full"
            type="tel"
          />
          <TextAreaInput
            label="Farmer's Payment terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <ToggleInput
            trueTitle="Active"
            falseTitle="Inactive"
            label="Farmer status"
            name="status"
            register={register}
            isActive={isActive}
            checked={true}
          />
        </div>
        <Button
          buttonTitle="Create Farmer"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Page;
