import { StateCreator } from "zustand";
import { Design } from "art2cart";

type DesignWithArea = Design & { areaName: string };

export interface DesignsSlice {
  designs: DesignWithArea[];
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
  designs: [],
  addDesign: ({ design, areaName }) =>
    set((state) => ({
      designs: [...state.designs, { ...design, areaName: areaName }],
    })),
  removeDesign: ({ design, areaName }) =>
    set((state) => ({
      designs: [...state.designs, { ...design, areaName: areaName }],
    })),
  clearDesigns: () => set(() => ({ designs: [] })),
});
