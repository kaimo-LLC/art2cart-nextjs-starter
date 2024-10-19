"use client";
import api from "@/lib/art2cart";
import { useQuery } from "@tanstack/react-query";
import { PersonalizationItem } from "art2cart";
import { useWizardStore } from "../../providers/useWizardStore";

export function usePersonalization({
  items,
}: {
  items: PersonalizationItem[];
}) {
  const {
    selectedPersonalizationItems,
    addSelectedPersonalizationItem,
    removeSelectedPersonalizationItem,
  } = useWizardStore();
  const { data } = useQuery({
    queryKey: ["designs"],
    queryFn: () =>
      api.getPersonalizationCategories(0, 10).then((data) => {
        return data;
      }),
    initialData: items,
    retry: 0,
    refetchInterval: 1000,
  });
  const categoryOptions = data;
  return {
    categoryOptions,
    selectedPersonalizationItems,
    addSelectedPersonalizationItem: (item: PersonalizationItem) =>
      addSelectedPersonalizationItem(item),
    removeSelectedPersonalizationItem: (item: PersonalizationItem) =>
      removeSelectedPersonalizationItem(item),
  };
}
