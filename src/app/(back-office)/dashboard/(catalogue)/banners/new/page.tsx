"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/back-office/forms/Button";
import ImageInput from "@/components/back-office/forms/ImageInput";
import TextAreaInput from "@/components/back-office/forms/TextAreaInput";
import TextInput from "@/components/back-office/forms/TextInput";
import ToggleInput from "@/components/back-office/forms/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { Banner } from "@/lib/types";
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
  } = useForm<Banner>({
    defaultValues: {
      isPublished: true,
    },
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const isActive = watch("isPublished");

  // this is handling submit
  const onSubmit: SubmitHandler<Banner> = async (data) => {
    data.url = imageUrl;

    await makePostRequest(
      setLoading,
      "api/banners",
      data,
      "Banners",
      reset
    ).then(() => setImageUrl(""));
  };

  return (
    <div>
      {/* header */}
      <Heading
        title="New Banner"
        returnBtn={true}
        handleBack={() => router.back()}
      />
      {/* table */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Banner Title"
            register={register}
            errors={errors}
          />
          <TextInput
            name="url"
            label="Banner url"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Banner Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Banner Image"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            endpoint="bannerUploader"
          />
          <ToggleInput
            trueTitle="Publish"
            falseTitle="Draft"
            label="Publish banner"
            name="isPublished"
            register={register}
            isActive={isActive}
            checked={true}
          />
        </div>
        <Button
          buttonTitle="Create Banner"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Page;
