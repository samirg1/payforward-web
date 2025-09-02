import { create } from "zustand";

import { APP_IS_AVAILABLE } from "@/data/constants";

interface ShowBannerStore {
    showBanner: boolean;
    setShowBanner: (showBanner: boolean) => void;
}

const useShowBannerStore = create<ShowBannerStore>()((set) => ({
    showBanner: !APP_IS_AVAILABLE,
    setShowBanner: (showBanner: boolean) => set({ showBanner }),
}));

export default useShowBannerStore;
