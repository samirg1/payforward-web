export const DOMAIN_NAME = "payforward.com.au";

export const SUPPORT_EMAIL = `support@${DOMAIN_NAME}`;
export const FEEDBACK_EMAIL = `feedback@${DOMAIN_NAME}`;
export const INFO_EMAIL = `info@${DOMAIN_NAME}`;

export const SUPPORT_PHONE: string | undefined = undefined;
export const SUPPORT_HOURS: string | undefined = undefined;
export const SUPPORT_ADDRESS: string | undefined = undefined;

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/payforward_au/",
    x: null as string | null,
    facebook: null as string | null,
    linkedin: "https://www.linkedin.com/company/payforward-au/",
    youtube: null as string | null,
} as const;

export const APP_STORE_URL: string | undefined = undefined; //"https://apps.apple.com/au/app/block-blast/id1617391485";
export const PLAY_STORE_URL: string | undefined = undefined; // "https://play.google.com/store/apps/details?id=com.payforward.blockblast";
export const APP_IS_AVAILABLE = !!(APP_STORE_URL || PLAY_STORE_URL);
