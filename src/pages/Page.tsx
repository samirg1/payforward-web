import { ReactNode } from "react";

import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";

import { NAV_ITEMS } from "@/data/constants";

import { useSetCurrentPage } from "@/state/useCurrentPageStore";

const Page = ({
    navLinkFrom,
    children,
    mainClassName,
}: {
    navLinkFrom?: (typeof NAV_ITEMS)[number]["label"];
    children: ReactNode;
    mainClassName?: string;
}) => {
    useSetCurrentPage(navLinkFrom);
    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className={mainClassName ?? "flex-1 pt-24 pb-16 mt-6"}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Page;
