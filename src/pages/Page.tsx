import { ReactNode } from "react";

import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";

const Page = ({
    children,
    mainClassName,
}: {
    children: ReactNode;
    mainClassName?: string;
}) => {
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
