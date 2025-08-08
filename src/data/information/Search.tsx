import { Lightbulb } from "lucide-react";

import searchContent from "@/data/searchContent";

const Search = () => (
    <div>
        {searchContent.descriptionLines.map((line, index) => (
            <p key={`description-line-${index}`} className="mb-4">
                {line}
            </p>
        ))}
        {[searchContent.criteria, searchContent.ranking].map(
            (section, index) => (
                <div key={`section-${index}`} className="mb-8">
                    <h3 className="mb-4 text-center underline">
                        {section.heading}
                    </h3>
                    <p className="mb-4">{section.subHeading}</p>
                    <ol className="list-decimal pl-6 mb-4">
                        {section.content.map((item, itemIndex) => (
                            <li
                                key={`section-content-${index}-${itemIndex}`}
                                className="mb-2"
                            >
                                <p className="font-semibold text-foreground">
                                    {item.title}
                                </p>
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                                {item.tip && (
                                    <span className="flex items-center text-xs">
                                        <Lightbulb
                                            size={24}
                                            className="ml-1 mr-2"
                                        />
                                        <span className="font-semibold flex-1">
                                            {item.tip}
                                        </span>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            ),
        )}
    </div>
);

// search params
/*
Searchable attributes:
1. service title
2. region description
3. name
4. bio

Ranking:
1. Match to searchable attributes
2. Location (if turned on and both user and business have location set)
3. Completions & Rating: how many completed transactions the business has
4. Rating: average rating of the business
*/

export default Search;
