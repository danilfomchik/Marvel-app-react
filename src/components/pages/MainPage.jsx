import {useState} from 'react';
import {Helmet} from 'react-helmet';

import decoration from '../../resources/img/vision.png';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
import SearchCharacterForm from '../searchCharacterForm/SearchCharacterForm';

const MainPage = () => {
    const [charId, setCharId] = useState(null);

    return (
        <>
            <Helmet>
                <meta name="description" content="Marvel information portal" />
                <meta name="keywords" content="Marvel, Marvel information portal, Marvel characters, Marvel comics " />
                <title>Marvel information portal</title>
            </Helmet>

            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>

            <div className="char__content">
                <ErrorBoundary>
                    <CharList setCharId={setCharId} />
                </ErrorBoundary>

                <div className="char__info-container">
                    <ErrorBoundary>
                        <CharInfo charId={charId} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <SearchCharacterForm />
                    </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    );
};

export default MainPage;
