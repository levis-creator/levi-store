"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/forms/Button";
import TextInput from "@/components/forms/TextInput";
import ToggleInput from "@/components/forms/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/couponGenerator";
import { Coupon } from "@/lib/types";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const couponCode = useRef<string>("");
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Coupon>({
    defaultValues: {
      isActive: true,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const isActive = watch("isActive");
  useEffect(() => {
    if (couponCode.current.length == 0) {
      handleGenerate();
    }
  }, []);

  // this is handling submit
  const onSubmit: SubmitHandler<Coupon> = async (data) => {
    const couponCode = generateCouponCode(8);
    data.couponCode = couponCode;
    await makePostRequest({
      setLoading,
      endpoint: "api/coupons",
      data,
      resourceName: "Coupon",
      reset,
      redirect: () => redirect("/dashboard/coupons"),
    });
  };

  return (
    <div>
      {/* header */}
      <Heading
        title="New Coupon"
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
            label="Coupon Title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            name="expiryDate"
            label="Category Expiry Date"
            register={register}
            errors={errors}
            type="date"
            className="w-full"
          />
          <ToggleInput
            trueTitle="Publish"
            falseTitle="Draft"
            label="Publish  Product"
            name="isActive"
            register={register}
            isActive={isActive}
            checked={true}
          />
        </div>
        <Button
          buttonTitle="Create Coupon"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Page;
