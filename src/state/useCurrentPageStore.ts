import { useEffect } from "react";
import { create } from "zustand";

import type { NAV_ITEMS } from "@/data/constants";

interface CurrentPageStore {
    currentPage: string;
    setCurrentPage: (currentPage: string) => void;
}

const useCurrentPageStore = create<CurrentPageStore>()((set) => ({
    currentPage: "home",
    setCurrentPage: (currentPage: string) => set({ currentPage }),
}));

export const useSetCurrentPage = (
    page: (typeof NAV_ITEMS)[number]["label"],
) => {
    const { setCurrentPage } = useCurrentPageStore();
    useEffect(() => {
        setCurrentPage(page);
    }, [page, setCurrentPage]);
};

export default useCurrentPageStore;
