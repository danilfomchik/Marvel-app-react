import {useState} from 'react';
import {Helmet} from 'react-helmet';

import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import SearchCharacterForm from '../searchCharacterForm/SearchCharacterForm';
import ErrorBoundery from '../errorBoundary/ErrorBoundery';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [charId, setCharId] = useState(null);

    return (
        <>
            <Helmet>
                <meta name="description" content="Marvel information portal" />
                <meta name="keywords" content="Marvel, Marvel information portal, Marvel characters, Marvel comics " />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundery>
                <RandomChar />
            </ErrorBoundery>
            <div className="char__content">
                <ErrorBoundery>
                    <CharList setCharId={setCharId} charId={charId} />
                </ErrorBoundery>

                <div className="char__info-container">
                    <ErrorBoundery>
                        <CharInfo charId={charId} />
                    </ErrorBoundery>
                    <ErrorBoundery>
                        <SearchCharacterForm />
                    </ErrorBoundery>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    );
};

export default MainPage;
