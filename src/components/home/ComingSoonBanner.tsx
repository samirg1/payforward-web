import useShowBannerStore from "@/state/useShowBannerStore";
import { AlertCircle, X } from "lucide-react";

const ComingSoonBanner = () => {
    const setShowBanner = useShowBannerStore((state) => state.setShowBanner);
    const handleClose = () => setShowBanner(false);

    return (
        <div className="bg-amber-50 border border-amber-200 p-2 text-center text-sm">
            <div className="flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                <p className="text-amber-800">
                    <span className="font-medium">
                        Our mobile app is coming soon!
                    </span>
                    <span className="ml-1 opacity-80">
                        Stay tuned for the release date.
                    </span>
                </p>
                <button
                    className="ml-2 text-amber-500 hover:text-amber-700 focus:outline-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default ComingSoonBanner;
