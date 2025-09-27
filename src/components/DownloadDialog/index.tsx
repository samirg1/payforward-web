import React, { useCallback } from "react";

import AppleLogo from "@/components/DownloadDialog/AppleLogo";
import GoogleLogo from "@/components/DownloadDialog/GoogleLogo";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/data/constants";

import useShowDownloadStore from "@/state/useShowDownloadStore";

const DownloadDialog: React.FC = () => {
    const showDownload = useShowDownloadStore((state) => state.showDownload);
    const setShowDownload = useShowDownloadStore((state) => state.set);
    const closeDownload = useShowDownloadStore((state) => state.close);

    const handleDownloadClick = useCallback(
        (url: string) => () => {
            return window.open(url, "_blank");
        },
        [],
    );

    return (
        <Dialog open={showDownload} onOpenChange={setShowDownload}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>App Download</DialogTitle>
                </DialogHeader>
                <div className="p-4 pt-0">
                    <FadeIn
                        duration={150}
                        className="mt-6 flex flex-col space-y-3"
                    >
                        <Button
                            variant="outline"
                            className="border-gray-300 justify-start"
                            disabled={!APP_STORE_URL}
                            onClick={handleDownloadClick(APP_STORE_URL)}
                        >
                            <AppleLogo />
                            <span>Download on the App Store</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-gray-300 justify-start"
                            disabled={!PLAY_STORE_URL}
                            onClick={handleDownloadClick(PLAY_STORE_URL)}
                        >
                            <GoogleLogo />
                            <span>Get it on Google Play</span>
                        </Button>
                    </FadeIn>
                    <FadeIn duration={200} className="mt-4 flex justify-end">
                        <Button variant="outline" onClick={closeDownload}>
                            Close
                        </Button>
                    </FadeIn>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadDialog;
