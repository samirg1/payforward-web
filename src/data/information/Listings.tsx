import deepLinkText from "@/lib/links/deepLinkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

const Listings = () => (
    <div>
        <p className="mb-4">
            Listings are a way for customers to request services in a
            streamlined way that allows businesses to{" "}
            <p className="mb-4 font-semibold inline">find them</p>.
        </p>
        <p className="mb-4">
            When a user posts a listings, a notification is sent to all
            businesses that match the listing criteria (location and service
            title). This allows businesses to quickly find and respond to
            potential customers.
        </p>
        <p className="mb-4">
            Businesses can also find these listings via search, as well as
            getting recommended listings based on their profile and past
            interactions.
        </p>
        <p>
            Clicking on a particular listing will take you to a more detailed
            view, where you can easily see the customer's requirements and send
            them a message or quote directly.
        </p>
        <p className="mt-4">You can add a listing on your account page.</p>
    </div>
);

export default Listings;
