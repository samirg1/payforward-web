import { create } from "zustand";
import { persist } from "zustand/middleware";

import { appStoreURL, playStoreURL } from "@/data/constants";

const appIsAvailable = appStoreURL || playStoreURL;

interface ShowBannerStore {
    showBanner: boolean;
    setShowBanner: (showBanner: boolean) => void;
}

const useShowBannerStore = create<ShowBannerStore>()(
    persist(
        (set) => ({
            showBanner: !appIsAvailable,
            setShowBanner: (showBanner: boolean) => set({ showBanner }),
        }),
        {
            name: "show-banner-storage",
        },
    ),
);

export default useShowBannerStore;
