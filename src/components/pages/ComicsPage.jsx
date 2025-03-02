import {Helmet} from 'react-helmet';

import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Page with list of comics" />
                <meta name="keywords" content="Marvel, Marvel comics" />
                <title>Marvel comics page</title>
            </Helmet>

            <AppBanner />
            <ErrorBoundary>
                <ComicsList />
            </ErrorBoundary>
        </>
    );
};

export default ComicsPage;
