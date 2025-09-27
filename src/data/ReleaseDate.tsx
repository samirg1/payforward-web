export default function ReleaseDate() {
    return <time dateTime="2025-09-27">September 27, 2025</time>;
}

export const ReleaseText = () => {
    return (
        <p className="text-green-800">
            <span className="font-medium">
                We are set to release on <ReleaseDate />!
            </span>
        </p>
    );
};
