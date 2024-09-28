import { StateCreator } from "zustand";

export type Listing = {
  [key: string]: string;
};

export interface ListingSlice {
  listing: Listing;
  setListing: (listing: Listing) => void;
}

export const createListingSlice: StateCreator<ListingSlice> = (set) => ({
  listing: {
    sku: "",
    handle: "",
    title: "",
    description: "",
    tags: "",
  },
  setListing: (listing) => set(() => ({ listing: listing })),
});
