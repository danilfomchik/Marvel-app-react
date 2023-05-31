import { useOutlet, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import ComicsList from "../comicsList/ComicsList";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    const outlet = useOutlet();

    return (
        <>
            <Helmet>
                <meta name="description" content="Page with list of comics" />
                <meta name="keywords" content="Marvel, Marvel comics" />
                <title>Marvel comics page</title>
            </Helmet>

            <AppBanner />
            <ErrorBoundery>
                <ComicsList />
            </ErrorBoundery>
        </>
    );
};

export default ComicsPage;
