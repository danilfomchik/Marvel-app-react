import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";

import decoration from "../../resources/img/vision.png";

const MainPage = () => {
    const [charId, setCharId] = useState(null);

    const updateCharId = (charId) => {
        setCharId(charId);
    };

    return (
        <>
            <ErrorBoundery>
                <RandomChar />
            </ErrorBoundery>

            <div className="char__content">
                <ErrorBoundery>
                    <CharList updateCharId={updateCharId} charId={charId} />
                </ErrorBoundery>

                <ErrorBoundery>
                    <CharInfo charId={charId} />
                </ErrorBoundery>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    );
};

export default MainPage;
