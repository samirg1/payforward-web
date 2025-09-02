import { useMemo } from "react";
import { useParams } from "react-router-dom";

import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useNavigate from "@/hooks/useNavigate";

// Example blog section components
const AllPosts = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-semibold">All Blog Posts</h2>
        <p className="text-muted-foreground">
            Welcome to our blog. Read the latest updates, engineering insights,
            and company news.
        </p>
    </div>
);

const Engineering = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Engineering</h2>
        <p className="text-muted-foreground">
            Deep dives, technical articles, and lessons learned from building
            our platform.
        </p>
    </div>
);

const Product = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Product Updates</h2>
        <p className="text-muted-foreground">
            Discover the newest features and improvements we’ve been working on.
        </p>
    </div>
);

const Company = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Company News</h2>
        <p className="text-muted-foreground">
            Stories about our journey, culture, and team highlights.
        </p>
    </div>
);

const tabs: {
    [key in BLOG_ROUTE_PARAMS["section"]]: {
        title: string;
        Component: React.FC;
    };
} = {
    all: {
        title: "All Posts",
        Component: AllPosts,
    },
    engineering: {
        title: "Engineering",
        Component: Engineering,
    },
    product: {
        title: "Product",
        Component: Product,
    },
    company: {
        title: "Company",
        Component: Company,
    },
};

const Blog = () => {
    const { section } = useParams<BLOG_ROUTE_PARAMS>();
    const navigate = useNavigate();

    const activeTab = useMemo(() => {
        if (!section) return "all";
        return section;
    }, [section]);

    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <FadeIn duration={100} className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                        <p className="text-lg text-muted-foreground">
                            Insights, updates, and stories from our team.
                        </p>
                    </FadeIn>

                    <Tabs
                        value={activeTab}
                        onValueChange={(value: keyof ROUTES["/blog"]) =>
                            navigate(value in tabs ? `/blog/${value}` : "/blog")
                        }
                        className="mb-12"
                    >
                        <FadeIn duration={120}>
                            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
                                {Object.entries(tabs).map(
                                    ([tabId, { title }]) => (
                                        <TabsTrigger key={tabId} value={tabId}>
                                            {title}
                                        </TabsTrigger>
                                    ),
                                )}
                            </TabsList>
                        </FadeIn>

                        {Object.entries(tabs).map(([tabId, { Component }]) => (
                            <TabsContent key={tabId} value={tabId}>
                                <Component />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </Page>
    );
};

export default Blog;
