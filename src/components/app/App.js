import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";

import decoration from "../../resources/img/vision.png";

const App = () => {
    const [charId, setCharId] = useState(null);

    const updateCharId = (charId) => {
        setCharId(charId);
    };

    return (
        <div className="app">
            <AppHeader />
            <main>
                <ErrorBoundery>
                    <RandomChar />
                </ErrorBoundery>

                <div className="char__content">
                    {/* <ErrorBoundery>
                        <CharList updateCharId={updateCharId} charId={charId} />
                    </ErrorBoundery> */}

                    {/* <ErrorBoundery>
                        <CharInfo charId={charId} />
                    </ErrorBoundery> */}
                </div>
                <ErrorBoundery>
                    <ComicsList />
                </ErrorBoundery>
                {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
            </main>
        </div>
    );
};

export default App;
