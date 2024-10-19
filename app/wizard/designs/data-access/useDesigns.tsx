"use client";
import api from "@/lib/art2cart";
import { useQuery } from "@tanstack/react-query";
import { Design } from "art2cart";
import { useWizardStore } from "../../providers/useWizardStore";

export function useDesigns({ designs }: { designs: Design[] }) {
  const { selectedDesigns, addSelectedDesign, removeSelectedDesign } =
    useWizardStore();

  const { data } = useQuery({
    queryKey: ["designs"],
    queryFn: () =>
      api.getDesigns(0, 10).then((data) => {
        return data;
      }),
    initialData: designs,
    retry: 0,
    refetchInterval: 1000,
  });

  const designOptions = data;

  return {
    designOptions,
    selectedDesigns,
    addSelectedDesign,
    removeSelectedDesign,
  };
}
