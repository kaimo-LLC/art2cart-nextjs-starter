import { StateCreator } from "zustand";

export interface ListingSlice {
  sku: string;
  handle: string;
  title: string;
  description: string;
  tags: string;
  setSku: (sku: string) => void;
  setHandle: (handle: string) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setTags: (tags: string) => void;
}

export const createListingSlice: StateCreator<ListingSlice> = (set) => ({
  sku: "",
  handle: "",
  title: "",
  description: "",
  tags: "",
  setSku: (sku) => set(() => ({ sku: sku })),
  setHandle: (handle) => set(() => ({ handle: handle })),
  setTitle: (title) => set(() => ({ title: title })),
  setDescription: (description) => set(() => ({ description: description })),
  setTags: (tags) => set(() => ({ tags: tags })),
});
