import { create } from "zustand";
import { persist } from "zustand/middleware";

import { APP_IS_AVAILABLE } from "@/data/constants";

interface ShowBannerStore {
    showBanner: boolean;
    setShowBanner: (showBanner: boolean) => void;
}

const useShowBannerStore = create<ShowBannerStore>()(
    persist(
        (set) => ({
            showBanner: !APP_IS_AVAILABLE,
            setShowBanner: (showBanner: boolean) => set({ showBanner }),
        }),
        {
            name: "show-banner-storage",
        },
    ),
);

export default useShowBannerStore;
