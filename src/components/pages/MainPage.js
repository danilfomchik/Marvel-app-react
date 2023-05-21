import { useState } from "react";
import { useOutlet, Outlet } from "react-router-dom";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import SearchCharacterForm from "../searchCharacterForm/SearchCharacterForm";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";

import decoration from "../../resources/img/vision.png";

const MainPage = () => {
    const [charId, setCharId] = useState(null);
    const outlet = useOutlet();

    const updateCharId = (charId) => {
        setCharId(charId);
    };

    return (
        <>
            {outlet ? (
                <Outlet />
            ) : (
                <>
                    <ErrorBoundery>
                        <RandomChar />
                    </ErrorBoundery>

                    <div className="char__content">
                        <ErrorBoundery>
                            <CharList
                                updateCharId={updateCharId}
                                charId={charId}
                            />
                        </ErrorBoundery>

                        <div>
                            <ErrorBoundery>
                                <CharInfo charId={charId} />
                            </ErrorBoundery>
                            <ErrorBoundery>
                                <SearchCharacterForm />
                            </ErrorBoundery>
                        </div>
                    </div>
                    <img
                        className="bg-decoration"
                        src={decoration}
                        alt="vision"
                    />
                </>
            )}
        </>
    );
};

export default MainPage;
{
    /* <>
            <ErrorBoundery>
                <RandomChar />
            </ErrorBoundery>

            <div className="char__content">
                <ErrorBoundery>
                    <CharList updateCharId={updateCharId} charId={charId} />
                </ErrorBoundery>

                <div>
                    <ErrorBoundery>
                        <CharInfo charId={charId} />
                    </ErrorBoundery>
                    <ErrorBoundery>
                        <SearchCharacterForm />
                    </ErrorBoundery>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </> */
}
