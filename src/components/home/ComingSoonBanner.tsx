import { X } from "lucide-react";

import { ReleaseText } from "@/data/ReleaseDate";

import useShowBannerStore from "@/state/useShowBannerStore";

const ComingSoonBanner = () => {
    const setShowBanner = useShowBannerStore((state) => state.setShowBanner);
    const handleClose = () => setShowBanner(false);

    return (
        <div className="bg-green-50 border border-green-200 p-2 text-center text-sm">
            <div className="flex items-center justify-center">
                <ReleaseText />
                <button
                    className="ml-2 text-green-500 hover:text-green-700 focus:outline-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default ComingSoonBanner;
