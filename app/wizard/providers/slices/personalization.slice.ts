import { StateCreator } from "zustand";
import { PersonalizationCategory } from "art2cart";

export interface PersonalizationCategorySlice {
  selectedPersonalizationItems: PersonalizationCategory[];
  addSelectedPersonalizationItem: (category: PersonalizationCategory) => void;
  removeSelectedPersonalizationItem: (
    category: PersonalizationCategory
  ) => void;
}

export const createPersonalizationCategorySlice: StateCreator<
  PersonalizationCategorySlice
> = (set) => ({
  selectedPersonalizationItems: [],
  addSelectedPersonalizationItem: (category) =>
    set((state) => ({
      selectedPersonalizationItems: [
        ...state.selectedPersonalizationItems,
        category,
      ],
    })),
  removeSelectedPersonalizationItem: (category) =>
    set((state) => ({
      selectedPersonalizationItems: [
        ...state.selectedPersonalizationItems,
        category,
      ],
    })),
});
