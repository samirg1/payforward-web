type Content = {
    title: string;
    description: string;
    tip?: never;
};

type CriteriaContent = {
    heading: string;
    subHeading: string;
    content: Content[];
};

type RankingContent = Omit<CriteriaContent, "content"> & {
    content: (Omit<Content, "tip"> & { tip?: string })[];
};

interface SearchContent {
    title: string;
    descriptionLines: string[];
    criteria: CriteriaContent;
    ranking: RankingContent;
}

const searchContent: SearchContent = {
    title: "Search",
    descriptionLines: [
        "Searching is a powerful tool for customers to find the services they need quickly and easily. A business should also ensure they are aware of how their profile appears in search results, and how to improve their ranking.",
        "We want to be as transparent as possible about how our search works. When you search for a service, we look at several factors to determine the best results for you.",
    ],
    criteria: {
        heading: "Criteria",
        subHeading:
            "We first determine the best matching results based on the following criteria:",
        content: [
            {
                title: "Service Title",
                description:
                    "We look for businesses that match the service title you are searching for.",
            },
            {
                title: "Region Description",
                description:
                    "If the business has their location listed, we'll try to match it with your search query.",
            },
            {
                title: "Name",
                description:
                    "Looking for a specific business? This'll help with that.",
            },
            {
                title: "Bio",
                description:
                    "As a last resort, we will look at the business's bio to see if any of it matches your search query.",
            },
        ],
    },
    ranking: {
        heading: "Ranking",
        subHeading:
            "After we have determined the best results based on the above criteria, we then rank the results based on the following factors:",
        content: [
            {
                title: "Location",
                description:
                    "If you and the business have their location set, and you search with the 'Search Around Me' option, we will prioritise businesses that are closer to you.",
                tip: "To improve this ranking as a business, ensure to set your location in your profile.",
            },
            {
                title: "Completions & Rating",
                description:
                    "We will prioritise businesses that have completed more transactions and have a higher rating.",
                tip: "Boost your visibility by using PayForward for your day-to-day transactions and maintaining a strong track record of great service.",
            },
        ],
    },
};

export default searchContent;
