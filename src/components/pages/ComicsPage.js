import { useOutlet, Outlet } from "react-router-dom";

import ComicsList from "../comicsList/ComicsList";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    const outlet = useOutlet();

    return (
        <>
            <AppBanner />
            {/* <ErrorBoundery> */}
            <>{outlet ? <Outlet /> : <ComicsList />}</>
            {/* </ErrorBoundery> */}
        </>
    );
};

export default ComicsPage;
