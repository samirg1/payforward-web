import { create } from "zustand";

interface ShowDownloadStore {
    showDownload: boolean;
    set: (showBanner: boolean) => void;
    show: () => void;
    close: () => void;
}

const useShowDownloadStore = create<ShowDownloadStore>((set) => ({
    showDownload: false,
    set: (showDownload: boolean) => set({ showDownload }),
    show: () => set({ showDownload: true }),
    close: () => set({ showDownload: false }),
}));

export default useShowDownloadStore;
