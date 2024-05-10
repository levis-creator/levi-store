import ProductForm from "@/components/back-office/forms/ProductForm";
import { getData } from "@/lib/getData";
import { Category, Farmer, SimplifiedData } from "@/lib/types";

const Page = async () => {
  const categoriesData: [] = await getData("categories");
  const farmersData: [] = await getData("farmers");
  const categories: SimplifiedData[] = categoriesData.map(
    (category: Category): SimplifiedData => ({
      id: category.id ?? "",
      title: category.title,
    })
  );
  const farmers: SimplifiedData[] = farmersData.map(
    (farmer: Farmer): SimplifiedData => ({
      id: farmer.id ?? "",
      title: farmer.name,
    })
  );
  return (
    <div>
      <ProductForm categories={categories} farmers={farmers} />
    </div>
  );
};

export default Page;
