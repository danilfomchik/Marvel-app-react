import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

//pages
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/comics" element={<ComicsPage />}>
                        {/* //:comicId придумываем сами - это уникальный идентификатор каждого комикса */}
                        <Route path=":comicId" element={<SingleComicPage />} />
                    </Route>

                    {/* //сделать красивую страницу с ошибкой c правильным переходом назад */}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
