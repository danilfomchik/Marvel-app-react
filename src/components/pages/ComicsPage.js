import ComicsList from "../comicsList/ComicsList";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    return (
        <>
            <AppBanner />
            <ErrorBoundery>
                <ComicsList />
            </ErrorBoundery>
        </>
    );
};

export default ComicsPage;
