import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import withSingleItemPage from "../../hoc/withSingleItemPage";

//pages
// import { MainPage, ComicsPage, SingleComicPage } from "../pages";
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
                        <Route path="/" element={<MainPage />}>
                            <Route
                                path="characters/:itemId"
                                element={<CharPage />}
                            />
                        </Route>

                        <Route path="/comics" element={<ComicsPage />}>
                            {/* //:comicId придумываем сами - это уникальный идентификатор каждого комикса */}
                            <Route path=":itemId" element={<ComicPage />} />
                        </Route>

                        {/* //сделать красивую страницу с ошибкой c правильным переходом назад */}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};

export default App;
