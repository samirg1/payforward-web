import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import AppleLogo from "@/components/DownloadDialog/AppleLogo";
import GoogleLogo from "@/components/DownloadDialog/GoogleLogo";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";
import React from "react";

interface DownloadDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const DownloadDialog: React.FC<DownloadDialogProps> = ({
    open,
    onOpenChange,
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>App Download</DialogTitle>
                    <DialogDescription>
                        Thank you for your interest in our application.
                    </DialogDescription>
                </DialogHeader>
                <div className="p-4 pt-0">
                    <Alert className="bg-amber-50 border-amber-200">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <AlertDescription className="text-amber-800">
                            Our mobile application is currently under
                            development and will be available for download soon.
                            Please check back later!
                        </AlertDescription>
                    </Alert>
                    <div className="mt-6 flex flex-col space-y-3">
                        <Button
                            variant="outline"
                            className="border-gray-300 justify-start"
                            disabled
                        >
                            <AppleLogo />
                            <span>Download on the App Store</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-gray-300 justify-start"
                            disabled
                        >
                            <GoogleLogo />
                            <span>Get it on Google Play</span>
                        </Button>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Button
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DownloadDialog;
