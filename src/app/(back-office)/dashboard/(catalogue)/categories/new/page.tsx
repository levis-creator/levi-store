"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/back-office/forms/Button";
import ImageInput from "@/components/back-office/forms/ImageInput";
import SelectInput from "@/components/back-office/forms/SelectInput";
import TextAreaInput from "@/components/back-office/forms/TextAreaInput";
import TextInput from "@/components/back-office/forms/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/slugGenerator";
import { Category, DummyData } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Category>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const market: DummyData[] = [
    {
      id: "1",
      title: "Market 1",
    },
    {
      id: "2",
      title: "Market 2",
    },
    {
      id: "3",
      title: "Market 3",
    },
    {
      id: "4",
      title: "Market 4",
    },
  ];
  // this is handling submit
  const onSubmit: SubmitHandler<Category> = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    await makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset
    ).then(() => setImageUrl(""));
  };

  return (
    <div>
      {/* header */}
      <Heading title="New category" returnBtn={true} handleBack={() => router.back()} />
      {/* table */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white  errors border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Category Title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Market"
            name="market"
            register={register}
            options={market}
            multiple={true}
            className="w-full"
          />
          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Category Image"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            endpoint="categoryUploader"
          />
        </div>
        <Button
          buttonTitle="Create Category"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Page;
