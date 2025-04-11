
import { Separator } from "@/components/ui/separator";
import information from "@/data/information";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ConditionalWrapper from "../ConditionalWrapper";
import pricing from "@/data/pricing";

const PricingContent = () => {
  return (
      <>
          {pricing.map((section, index) => (
              <Card
                  key={`getting-started-content-${section.title}-${index}`}
                  className={`${
                      index === pricing.length - 1
                          ? "mb-0"
                          : "mb-8"
                  }`}
              >
                  <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                      <CardDescription>{section.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                      {section.description && (
                          <p className="mb-4 text-muted-foreground">
                              {section.description}
                          </p>
                      )}
                      <ConditionalWrapper
                          condition={section.listType === "ordered"}
                          wrapperIfTrue={(children) => (
                              <ol className="list-decimal pl-5 space-y-3">
                                  {children}
                              </ol>
                          )}
                          wrapperIfFalse={(children) => (
                              <ul className="list-disc pl-5 space-y-3">
                                  {children}
                              </ul>
                          )}
                      >
                          {section.content.map((item, itemIndex) => (
                              <li key={`list-content-${item}-${itemIndex}`}>
                                  <strong>{item[0]}</strong>
                                  <p className="text-muted-foreground mt-1">
                                      {item[1]}
                                  </p>
                              </li>
                          ))}
                      </ConditionalWrapper>
                  </CardContent>
              </Card>
          ))}
      </>
  );
};

export default PricingContent;
