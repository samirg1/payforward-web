// Utility function to replace placeholders with links
export default (text: string): React.ReactNode => {
    const regex = /%([^:]+):([^%]+)%/g;
    const parts = [];
    let match: RegExpExecArray | [any, any, any];
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
                className="text-blue-500 underline"
            >
                {linkText}
            </a>
        );

        lastIndex = regex.lastIndex;
    }

    // Push the remaining text after the last match
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};
