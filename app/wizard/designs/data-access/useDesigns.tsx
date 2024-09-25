"use client";
import { designSdk } from "@/lib/art2cart";
import { useQuery } from "@tanstack/react-query";
import { Design } from "art2cart";
import { useWizardStore } from "../../providers/useWizardStore";

export function useDesigns({ designs }: { designs: Design[] }) {
  const { selectedDesigns, addSelectedDesign, removeSelectedDesign } =
    useWizardStore();

  const { data } = useQuery({
    queryKey: ["designs"],
    queryFn: () => designSdk.getAllDesigns(0, 10).then((res) => res.data),
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
