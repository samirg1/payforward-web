export default function ReleaseDate() {
    return <time dateTime="2025-09-27">September 27, 2025</time>;
}

export const ReleaseText = () => {
    return (
        <p className="text-green-800">
            <span className="font-medium">
                We are set to release on <ReleaseDate />!
            </span>
            <a className="ml-1 opacity-80 underline" href="/join-waitlist">
                Join our waitlist to be notified when we launch.
            </a>
        </p>
    );
};
