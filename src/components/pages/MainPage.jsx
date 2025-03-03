import {useCallback, useRef, useState} from 'react';
import {Helmet} from 'react-helmet';

import decoration from '../../resources/img/vision.png';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
import SearchCharacterForm from '../searchCharacterForm/SearchCharacterForm';

const MainPage = () => {
    const [charId, setCharId] = useState(null);
    const itemRefs = useRef([]);

    const onRemoveFocusOnItem = useCallback(() => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
    }, []);

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
                    <CharList itemRefs={itemRefs} setCharId={setCharId} onRemoveFocusOnItem={onRemoveFocusOnItem} />
                </ErrorBoundary>

                <div className="char__info-container">
                    <ErrorBoundary>
                        <CharInfo charId={charId} setCharId={setCharId} onRemoveFocusOnItem={onRemoveFocusOnItem} />
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
