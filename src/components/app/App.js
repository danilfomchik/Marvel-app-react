import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import withSingleItemPage from "../../hoc/withSingleItemPage";

import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicLayout = lazy(() =>
    import("../pages/SingleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
    import("../pages/SingleCharacterLayout/SingleCharacterLayout")
);

const App = () => {
    const CharPage = withSingleItemPage(SingleCharacterLayout, "character");
    const ComicPage = withSingleItemPage(SingleComicLayout, "comic");

    return (
        <div className="app">
            <AppHeader />
            <main>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route
                            path="characters/:itemId"
                            element={<CharPage />}
                        />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route path="/comics/:itemId" element={<ComicPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};

export default App;
