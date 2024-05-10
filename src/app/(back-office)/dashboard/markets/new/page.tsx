import MarketForm from "@/components/back-office/forms/MarketForm";
import { getData } from "@/lib/getData";
import { Category, SimplifiedData } from "@/lib/types";

const Page = async () => {
  const categoriesData: [] = await getData("categories");
  const categories: SimplifiedData[] = categoriesData.map(
    (category: Category): SimplifiedData => ({
      id: category.id ?? "",
      title: category.title,
    })
  );
  return <MarketForm categories={categories} />;
};

export default Page;
