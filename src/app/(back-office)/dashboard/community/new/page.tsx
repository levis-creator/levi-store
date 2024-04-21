"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/forms/Button";
import ImageInput from "@/components/forms/ImageInput";
import RichTextInput from "@/components/forms/RichTextInput";
import SelectInput from "@/components/forms/SelectInput";
import TextAreaInput from "@/components/forms/TextAreaInput";
import TextInput from "@/components/forms/TextInput";
import ToggleInput from "@/components/forms/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/slugGenerator";
import { Training, DummyData } from "@/lib/types";
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
  } = useForm<Training>({
    defaultValues: {
      isPublished: true,
    },
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const isActive = watch("isPublished");

  const category: DummyData[] = [
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
  const onSubmit: SubmitHandler<Training> = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.thumbnail = imageUrl;
    data.content = content;
    await makePostRequest(
      setLoading,
      "api/training",
      data,
      "Training",
      reset
    ).then(() => {
      setImageUrl("");
      setContent("");
    });
  };

  return (
    <div>
      {/* header */}
      <Heading
        title="New Training"
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
            label="Training Title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="category"
            register={register}
            options={category}
            className="w-full"
          />
          <TextAreaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Training Image"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            endpoint="trainingUploader"
          />
          {/* content */}
          <RichTextInput
            content={content}
            onChange={setContent}
            label="Training Content"
          />
          {/* content end */}
          <ToggleInput
            trueTitle="Publish"
            falseTitle="Draft"
            label="Publish Training"
            name="isPublished"
            register={register}
            isActive={isActive}
            checked={true}
          />
        </div>
        <Button
          buttonTitle="Create Training"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Page;
