import useShowDownloadStore from "@/state/useShowDownloadStore";
import { AlertCircle } from "lucide-react";
import React, { useCallback } from "react";

import AppleLogo from "@/components/DownloadDialog/AppleLogo";
import GoogleLogo from "@/components/DownloadDialog/GoogleLogo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { appStoreURL, playStoreURL } from "@/data/constants";

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
                    <Alert className="bg-amber-50 border-amber-200">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <AlertDescription className="text-amber-800">
                            Our mobile application is currently in the prototype phase and will be available for download soon.
                            Please check back later!
                        </AlertDescription>
                    </Alert>
                    <div className="mt-6 flex flex-col space-y-3">
                        <Button
                            variant="outline"
                            className="border-gray-300 justify-start"
                            disabled={!appStoreURL}
                            onClick={handleDownloadClick(appStoreURL)}
                        >
                            <AppleLogo />
                            <span>Download on the App Store</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-gray-300 justify-start"
                            disabled={!playStoreURL}
                            onClick={handleDownloadClick(playStoreURL)}
                        >
                            <GoogleLogo />
                            <span>Get it on Google Play</span>
                        </Button>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button variant="outline" onClick={closeDownload}>
                            Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadDialog;
