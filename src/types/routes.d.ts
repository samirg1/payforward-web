type ROUTES = {
    "/docs": {
        information: {
            payments: undefined;
            onboarding: undefined;
            security: undefined;
            listings: undefined;
            ratings: undefined;
            search: undefined;
            verifications: undefined;
        };
        tutorials: undefined;
        pricing: undefined;
        "quick-start": undefined;
    };
    "/blog": {
        all: undefined;
        engineering: undefined;
        product: undefined;
        company: undefined;
    };
    "/legal": {
        terms: undefined;
        privacy: undefined;
        cookies: undefined;
    };
    "/faq": undefined;
    "/contact": undefined;
    "/about": undefined;
    "/join-waitlist": undefined;
    "/": undefined;
};

type DOC_ROUTE_PARAMS<T extends keyof ROUTES["/docs"] = keyof ROUTES["/docs"]> =
    {
        section: T;
        subSection?: keyof ROUTES["/docs"][T];
    };

type LEGAL_ROUTE_PARAMS<
    T extends keyof ROUTES["/legal"] = keyof ROUTES["/legal"],
> = {
    section: T;
};

type BLOG_ROUTE_PARAMS<
    T extends keyof ROUTES["/blog"] = keyof ROUTES["/blog"],
> = {
    section: T;
};

type JoinRoute<A extends string, B extends string> = A extends ""
    ? B
    : A extends "/"
      ? `/${B}`
      : `${A}/${B}`;

type FlattenRoutes<T, Prefix extends string = ""> = {
    [K in keyof T]: T[K] extends undefined
        ? JoinRoute<Prefix, K & string>
        :
              | JoinRoute<Prefix, K & string>
              | FlattenRoutes<T[K], JoinRoute<Prefix, K & string>>;
}[keyof T];
type RoutePatterns<T> = {
    [K in keyof T]: T[K] extends undefined ? K : `${K}/${string}`;
};

type ALL_ROUTES = Prettify<FlattenRoutes<ROUTES>>;
type ALL_PATHS = Prettify<
    RoutePatterns<ROUTES> & {
        redirect: "/redirect";
        "not-found": "*";
    }
>;
