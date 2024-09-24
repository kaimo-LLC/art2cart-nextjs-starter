import { StateCreator } from "zustand";
import { Design } from "art2cart";

type DesignWithArea = Design & { areaName: string };

export interface DesignsSlice {
  selectedDesigns: DesignWithArea[];
  addDesign: ({
    design,
    areaName,
  }: {
    design: Design;
    areaName: string;
  }) => void;
  removeDesign: ({
    design,
    areaName,
  }: {
    design: Design;
    areaName: string;
  }) => void;
  clearDesigns: () => void;
}

export const createDesignsSlice: StateCreator<DesignsSlice> = (set) => ({
  selectedDesigns: [],
  addDesign: ({ design, areaName }) =>
    set((state) => ({
      selectedDesigns: [...state.selectedDesigns, { ...design, areaName: areaName }],
    })),
  removeDesign: ({ design, areaName }) =>
    set((state) => ({
      selectedDesigns: [...state.selectedDesigns, { ...design, areaName: areaName }],
    })),
  clearDesigns: () => set(() => ({ selectedDesigns: [] })),
});
