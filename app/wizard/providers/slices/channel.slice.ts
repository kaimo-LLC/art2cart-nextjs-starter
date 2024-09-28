import { StateCreator } from "zustand";
import { Channel } from "art2cart";

export interface ChannelSlice {
  selectedChannels: Channel[];
  addSelectedChannel: (channel: Channel) => void;
  removeSelectedChannel: (channel: Channel) => void;
}

export const createChannelSlice: StateCreator<ChannelSlice> = (set) => ({
  selectedChannels: [],
  addSelectedChannel: (channel) =>
    set((state) => ({
      selectedChannels: [...state.selectedChannels, channel],
    })),
  removeSelectedChannel: (channel) =>
    set((state) => ({
      selectedChannels: [...state.selectedChannels, channel],
    })),
});
