import {
    type NavigateOptions,
    type Path,
    useNavigate as useReactNavigate,
} from "react-router-dom";

const useNavigate = () => {
    const navigate = useReactNavigate();

    function navigateWithOptions(
        to: ALL_ROUTES | Partial<Path>,
        options?: NavigateOptions,
    ): void;
    function navigateWithOptions(delta: number): void;
    function navigateWithOptions(
        toOrDelta: ALL_ROUTES | Partial<Path> | number,
        options?: NavigateOptions,
    ) {
        if (typeof toOrDelta === "number") {
            navigate(toOrDelta);
        } else {
            navigate(toOrDelta, options);
        }
    }

    return navigateWithOptions;
};

export default useNavigate;
