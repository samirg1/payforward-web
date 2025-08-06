import { DOMAIN_NAME } from "@/data/constants";

// Utility function to replace placeholders with links
const replacePlaceholdersWithLinks = <T extends boolean = false>(
    text: string,
    rawHtml?: T,
): T extends true ? string : React.ReactNode => {
    const regex = /%%([^:]+):([^%]+)%%/g;
    if (rawHtml === true) {
        return text.replace(
            /%%([^:]+):([^%]+)%%/g,
            (_match, linkText, linkHref) => {
                return `<a href="https://${DOMAIN_NAME}${linkHref}">${linkText}</a>`;
            },
        );
    }

    const parts = [];
    let match: RegExpExecArray;
    let lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
        const [, linkText, linkHref] = match;

        // Push the text before the match
        if (lastIndex < match.index) {
            parts.push(text.slice(lastIndex, match.index));
        }

        // Push the link
        parts.push(
            <a
                key={match.index}
                href={linkHref}
                className="text-blue-500 hover:text-blue-700 underline"
                target={
                    /^https?:\/\//.test(linkHref) || /^www\./.test(linkHref)
                        ? "_blank"
                        : undefined
                }
                rel={
                    /^https?:\/\//.test(linkHref) || /^www\./.test(linkHref)
                        ? "noopener noreferrer"
                        : undefined
                }
            >
                {linkText}
            </a>,
        );

        lastIndex = regex.lastIndex;
    }

    // Push the remaining text after the last match
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts as unknown as T extends true ? string : React.ReactNode;
};

export default replacePlaceholdersWithLinks;
