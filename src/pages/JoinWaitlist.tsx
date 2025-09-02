import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";

import ReleaseDate from "@/data/ReleaseDate";

const JoinWaitlist = () => {
    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <FadeIn duration={100} className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">
                            Join the Waitlist
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Join our waitlist to be notified when we launch on{" "}
                            <ReleaseDate />.
                        </p>
                    </FadeIn>

                    <FadeIn duration={200} className="bg-white rounded-lg">
                        <div
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                height: "340px",
                            }}
                        >
                            <iframe
                                id="JotFormIFrame-252422733672860"
                                title="PayForward Waitlist"
                                onLoad={() => window.parent.scrollTo(0, 0)}
                                allowTransparency
                                frameBorder="0"
                                src="https://form.jotform.com/252422733672860"
                                style={{
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    height: "400px",
                                    border: "none",
                                }}
                                scrolling="no"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Page>
    );
};

export default JoinWaitlist;
