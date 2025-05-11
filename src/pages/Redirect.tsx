import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [route, setRoute] = useState<string | null>(null);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const route = query.get("route");
        const deepLink = `payforward://${route}`;
        setRoute(deepLink);
        if (
            route &&
            ["account/settings/business?reload=true"].includes(route)
        ) {
            window.open(deepLink, "_self");
        }
    }, [location, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
                <p className="text-xl text-gray-600 mb-4">
                    If you are not redirected automatically, click the link
                    below or close this window.
                </p>
                {route && (
                    <a
                        href={route}
                        className="text-blue-500 hover:text-blue-700 underline"
                    >
                        Link
                    </a>
                )}
                <br />
                <br />
                <br />
                <a
                    href="/"
                    className="text-blue-500 hover:text-blue-700 underline"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default Redirect;
