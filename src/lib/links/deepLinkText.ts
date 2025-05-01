import linkText from "@/lib/links/linkText";

const deepLinkText = (title: string, deepLink: DeepLinkRoutes): string =>
    linkText(title, `payforward://${deepLink}`);

export default deepLinkText;
