"use client";
import Heading from "@/components/back-office/Heading";
import TextInput from "@/components/back-office/forms/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import { Banner, Category } from "@/lib/types";
import Button from "@/components/back-office/forms/Button";
import TextAreaInput from "@/components/back-office/forms/TextAreaInput";
import { generateSlug } from "@/lib/slugGenerator";
import { useRouter } from "next/navigation";
import ImageInput from "@/components/back-office/forms/ImageInput";
import { makePostRequest } from "@/lib/apiRequest";

const Page = () => {
  const router = useRouter();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Banner>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // this is handling submit
  const onSubmit: SubmitHandler<Banner> = async (data) => {
    // data.slug = slug;
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
            endpoint="imageUploader"
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
