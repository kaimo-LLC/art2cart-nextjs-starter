import api from "@/lib/art2cart";
import { TitleCard } from "@/components/TitleCard";
import { WizardNav } from "../ui/WizardNav";
import { ReviewPanel } from "../ui/ReviewPanel";
import { BodyCard } from "@/components/BodyCard";
import { PersonalizationCategory, PersonalizationItem } from "art2cart";
import { CategorySelector } from "./ui/CategorySelector";
import { ItemSelector } from "./ui/ItemSelector";

async function fetchCategoryData({
  cursor,
  limit,
}: {
  cursor?: number;
  limit?: number;
}): Promise<PersonalizationCategory[]> {
  const data = await api.getPersonalizationCategories(cursor, limit);
  if (!data) {
    return [];
  }
  return data;
}

async function fetchItemData({
  category,
  cursor,
  limit,
}: {
  category: string | undefined;
  cursor?: number;
  limit?: number;
}): Promise<PersonalizationItem[]> {
  if (!category) {
    return [];
  }
  const data = await api.getPersonalizationItemsByCategory(
    category,
    cursor,
    limit
  );
  if (!data) {
    return [];
  }
  return data;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { category: string; item: string };
}) {
  const categories = await fetchCategoryData({ cursor: 0, limit: 20 });
  const items = await fetchItemData({
    category: searchParams?.category,
    cursor: 0,
    limit: 20,
  });

  const categoryList = categories.map(function (category) {
    return {
      value: `${category.id}`,
      label: category.name,
    };
  });

  const itemList = items.map(function (item) {
    return { value: `${item.id}`, label: item.name };
  });

  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-16">
      <TitleCard
        showHome
        title="Wizard"
        description="Create a new job, step by step"
      />
      <WizardNav current={"personalization"} />
      <div className="mt-8">
        <BodyCard
          title="Personalization"
          description="Select personalization data"
        >
          <div className="grid grid-cols-3 gap-4">
            <CategorySelector
              categories={categoryList}
              selectedCategory={searchParams?.category || ""}
            />
            <div className="col-span-2">
              <ItemSelector items={itemList} />
            </div>
          </div>
        </BodyCard>
      </div>
      <div className="flex justify-end my-8">
        <ReviewPanel />
      </div>
    </div>
  );
}
