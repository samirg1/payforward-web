import { create } from "zustand";

import { appStoreURL, playStoreURL } from "@/data/constants";

const appIsAvailable = appStoreURL || playStoreURL;

interface ShowBannerStore {
    showBanner: boolean;
    setShowBanner: (showBanner: boolean) => void;
}

const useShowBannerStore = create<ShowBannerStore>((set) => ({
    showBanner: !appIsAvailable,
    setShowBanner: (showBanner: boolean) => set({ showBanner }),
}));

export default useShowBannerStore;
