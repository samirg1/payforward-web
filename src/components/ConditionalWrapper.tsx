import React from "react";

interface ConditionalWrapperProps {
    condition: boolean;
    wrapperIfTrue: (children: React.ReactNode) => JSX.Element;
    wrapperIfFalse: (children: React.ReactNode) => JSX.Element;
    children: React.ReactNode;
}

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
    condition,
    wrapperIfTrue,
    wrapperIfFalse,
    children,
}) => {
    return condition ? wrapperIfTrue(children) : wrapperIfFalse(children);
};

export default ConditionalWrapper;
