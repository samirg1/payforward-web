import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

import useShowDownloadStore from "@/state/useShowDownloadStore";

const CallToAction = () => {
    const showDownload = useShowDownloadStore((state) => state.show);

    return (
        <section className="py-16 bg-primary/5">
            <FadeIn duration={100} className="container mx-auto px-4">
                <div className="rounded-2xl hero-gradient py-12 px-8 md:px-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Download our app today and start growing your business
                        with PayForward.
                    </p>
                    <FadeIn
                        duration={120}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90"
                            onClick={showDownload}
                        >
                            Download Now
                        </Button>
                    </FadeIn>
                </div>
            </FadeIn>
        </section>
    );
};

export default CallToAction;
