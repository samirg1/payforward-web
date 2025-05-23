import useShowDownloadStore from "@/state/useShowDownloadStore";

import { Button } from "@/components/ui/button";

const CallToAction = () => {
    const showDownload = useShowDownloadStore((state) => state.show);

    return (
        <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-800 py-12 px-8 md:px-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Download our app today and experience .
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90"
                            onClick={showDownload}
                        >
                            Download Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
