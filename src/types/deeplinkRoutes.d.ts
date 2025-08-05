type StaticRoutes =
    | ``
    | `conversations`
    | `payments`
    | `search`
    | `account`
    | `account/manage-posts`
    | `account/manage-listings`
    | `account/edit-profile`
    | `account/settings`
    | `account/settings/account`
    | `account/settings/account/reset-password`
    | `account/settings/business`
    | `account/settings/info`
    | `account/settings/info/verifications`
    | `loginsignup`
    | `payment-dashboard`;

type DynamicRoutes =
    | `search?query=${string}`
    | `account/${string}`
    | `comments/${string}`
    | `conversations/${string}`
    | `payments/${string}`
    | `posts/${string}`
    | `listings/${string}`;

type DeepLinkRoutes = StaticRoutes | DynamicRoutes;
