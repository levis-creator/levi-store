"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/forms/Button";
import ImageInput from "@/components/forms/ImageInput";
import SelectInput from "@/components/forms/SelectInput";
import TextAreaInput from "@/components/forms/TextAreaInput";
import TextInput from "@/components/forms/TextInput";
import ToggleInput from "@/components/forms/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { SimplifiedData, Market } from "@/lib/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const MarketForm: FC<{
  categories: SimplifiedData[];
}> = ({ categories }) => {
  const router = useRouter();
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Market>({
    defaultValues: {
      isActive: true,
    },
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const isActive = watch("isActive");

  // this is handling submit
  const onSubmit: SubmitHandler<Market> = async (data) => {
    data.logo = imageUrl;
    await makePostRequest({
      setLoading,
      endpoint: "api/markets",
      data,
      resourceName: "Markets",
      reset,
      redirect: () => router.push("/dashboard/markets"),
    }).then(() => setImageUrl(""));
  };

  return (
    <div>
      {/* header */}
      <Heading title="New Market" returnBtn={true} handleBack={router.back} />
      {/* table */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Market Title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Categories"
            name="categories"
            register={register}
            options={categories}
            multiple={true}
            className="w-full"
          />
          <TextAreaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Market Logo"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            endpoint="marketUploader"
          />
          <ToggleInput
            trueTitle="Active"
            falseTitle="Draft"
            label="Market status"
            name="isActive"
            register={register}
            isActive={isActive}
            checked={true}
          />
        </div>
        <Button
          buttonTitle="Create Market"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default MarketForm;
