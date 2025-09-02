import Facebook from "@/components/socialIcons/Facebook";
import Instagram from "@/components/socialIcons/Instagram";
import Linkedin from "@/components/socialIcons/LinkedIn";
import X from "@/components/socialIcons/X";
import YouTube from "@/components/socialIcons/YouTube";

export const DOMAIN_NAME = "payforward.com.au";

export const SUPPORT_EMAIL = `support@${DOMAIN_NAME}`;
export const FEEDBACK_EMAIL = `feedback@${DOMAIN_NAME}`;
export const INFO_EMAIL = `info@${DOMAIN_NAME}`;

export const SUPPORT_PHONE: string | undefined = undefined;
export const SUPPORT_HOURS: string | undefined = undefined;
export const SUPPORT_ADDRESS: string | undefined = undefined;

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/payforward_au/",
    x: "https://x.com/payforward_au",
    facebook: null as string | null,
    linkedin: "https://www.linkedin.com/company/payforward-au/",
    youtube: null as string | null,
} as const;

export const SOCIAL_LINKS_MAPPINGS: Record<
    keyof typeof SOCIAL_LINKS,
    {
        url: string | null;
        Icon: React.ComponentType<{ className?: string }>;
    }
> = {
    instagram: {
        url: SOCIAL_LINKS.instagram,
        Icon: Instagram,
    },
    x: {
        url: SOCIAL_LINKS.x,
        Icon: X,
    },
    facebook: {
        url: SOCIAL_LINKS.facebook,
        Icon: Facebook,
    },
    linkedin: {
        url: SOCIAL_LINKS.linkedin,
        Icon: Linkedin,
    },
    youtube: {
        url: SOCIAL_LINKS.youtube,
        Icon: YouTube,
    },
};

export const APP_STORE_URL: string | undefined = undefined; //"https://apps.apple.com/au/app/block-blast/id1617391485";
export const PLAY_STORE_URL: string | undefined = undefined; // "https://play.google.com/store/apps/details?id=com.payforward.blockblast";
export const APP_IS_AVAILABLE = !!(APP_STORE_URL || PLAY_STORE_URL);

export const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
] as const;
