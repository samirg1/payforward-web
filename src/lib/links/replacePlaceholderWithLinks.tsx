// Utility function to replace placeholders with links
const replacePlaceholdersWithLinks = (text: string): React.ReactNode => {
    const regex = /%([^:]+):([^%]+)%/g;
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

    return parts;
};

export default replacePlaceholdersWithLinks;
