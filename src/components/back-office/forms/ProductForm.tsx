"use client";
import Heading from "@/components/back-office/Heading";
import Button from "@/components/forms/Button";
import ImageInput from "@/components/forms/ImageInput";
import SelectInput from "@/components/forms/SelectInput";
import TextAreaInput from "@/components/forms/TextAreaInput";
import TextInput from "@/components/forms/TextInput";
import ToggleInput from "@/components/forms/ToggleInput";
import TagsDisplay from "@/components/forms/tags/TagsDisplay";
import TagsInput from "@/components/forms/tags/TagsInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/slugGenerator";
import { SimplifiedData, Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type ProductProps = {
  categories: SimplifiedData[];
  farmers: SimplifiedData[];
};
const ProductForm: FC<ProductProps> = ({ categories, farmers }) => {
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Product>({
    defaultValues: {
      isPublished: true,
      isWholeSale: false,
    },
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();
  const isActive = watch("isPublished");
  const isWholeSale = watch("isWholeSale");
  // this is handling submit
  const onSubmit: SubmitHandler<Product> = async (data: Product) => {
    data.images = [imageUrl];
    data.tags = tags;
    data.qty = 1;
    data.slug = generateSlug(data.title);
    await makePostRequest({
      setLoading,
      endpoint: "api/products",
      data,
      resourceName: "Product",
      reset,
      redirect: () => router.push("/dashboard/products"),
    }).then(() => setImageUrl(""));
  };

  return (
    <>
      {/* header */}
      <Heading title="New Products" returnBtn={true} handleBack={router.back} />
      {/* table */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            name="title"
            label="Product Title"
            register={register}
            errors={errors}
          />
          <TextInput
            name="sku"
            label="Product SKU"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            name="barcode"
            label="Product Barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            name="productPrice"
            label="Product Price"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            name="salesPrice"
            label="Product Sales Price (discounted)"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            name="qty"
            label="Stock Available"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            name="unit"
            label="Unit of Measurement(eg. kg)"
            register={register}
            errors={errors}
            type="text"
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="category"
            register={register}
            options={categories}
            className="w-full"
          />
          <SelectInput
            label="Select Farmers"
            name="farmer"
            register={register}
            options={farmers}
            className="w-full"
          />
          <ToggleInput
            trueTitle="Wholesale"
            falseTitle="not wholesale"
            label="Sell by wholesale"
            name="isWholeSale"
            register={register}
            isActive={isWholeSale}
            checked={false}
          />
          {isWholeSale && (
            <>
              <TextInput
                name="wholeSalePrice"
                label="Wholesale price"
                register={register}
                errors={errors}
                className="w-full"
                type="number"
              />
              <TextInput
                name="minWholeSaleQuantity"
                label="Minimum Wholesale Quantity"
                register={register}
                errors={errors}
                className="w-full"
                type="number"
              />
            </>
          )}
          <ImageInput
            label="Product image"
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            endpoint="productUploader"
          />
          {/* tag */}
          <TagsInput label="Tags" name="tags" setTags={setTags} />
          {tags?.length !== 0 && <TagsDisplay tags={tags} setTags={setTags} />}
          {/* tag end */}
          <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            trueTitle="Publish"
            falseTitle="Draft"
            label="Publish  Product"
            name="isPublished"
            register={register}
            isActive={isActive}
            checked={true}
          />
        </div>
        <Button
          buttonTitle="Create Product"
          loadTitle="Creating..."
          isLoading={loading}
          type="submit"
        />
      </form>
    </>
  );
};

export default ProductForm;
