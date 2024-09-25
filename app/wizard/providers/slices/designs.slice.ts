import { StateCreator } from "zustand";
import { Design } from "art2cart";

type DesignWithArea = Design & { areaName: string };

export interface DesignsSlice {
  selectedDesigns: DesignWithArea[];
  addSelectedDesign: ({
    design,
    areaName,
  }: {
    design: Design;
    areaName: string;
  }) => void;
  removeSelectedDesign: ({
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
  addSelectedDesign: ({ design, areaName }) =>
    set((state) => ({
      selectedDesigns: [
        ...state.selectedDesigns,
        { ...design, areaName: areaName },
      ],
    })),
  removeSelectedDesign: ({ design, areaName }) =>
    set((state) => ({
      selectedDesigns: [
        ...state.selectedDesigns,
        { ...design, areaName: areaName },
      ],
    })),
  clearDesigns: () => set(() => ({ selectedDesigns: [] })),
});
