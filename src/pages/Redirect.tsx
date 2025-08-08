import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useNavigate from "@/hooks/useNavigate";

const Redirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [route, setRoute] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean>(true);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const route = query.get("route");
        const deepLink = `payforward://${route ?? ""}`;
        setRoute(deepLink);
        if (
            ["account/settings/business?reload=true", ""].includes(route ?? "")
        ) {
            window.open(deepLink, "_self");
        } else {
            setIsValid(false);
        }
    }, [location, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                {isValid ? (
                    <>
                        <h1 className="text-4xl font-bold mb-4">
                            Redirecting...
                        </h1>
                        <p className="text-xl text-gray-600 mb-4">
                            If you are not redirected automatically, click the
                            link below or close this window.
                        </p>
                        {route && (
                            <a
                                href={route}
                                className="text-blue-500 hover:text-blue-700 underline"
                            >
                                Link
                            </a>
                        )}
                    </>
                ) : (
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                        Invalid redirect.
                    </h1>
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
