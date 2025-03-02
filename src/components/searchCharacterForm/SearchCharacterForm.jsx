import React, {memo, useState} from 'react';
import {Link} from 'react-router-dom';

import useSingleData from '../../hooks/useSingleData';
import useMarvelService from '../../services/MarvelService';
import Portal from '../Portal/Portal';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './search-character-form.scss';

const setSingleContent = (process, ViewComponent, data, queryName) => {
    switch (process) {
        case 'waiting':
            return null;
        case 'loading':
            return <Spinner />;
        case 'error':
            return !data && queryName.length > 0 && <Error />;
        case 'confirmed':
            return data.length > 0 ? <ViewComponent data={data} /> : <Error />;
        default:
            throw new Error('Unexpected process state');
    }
};

const SearchCharacterForm = memo(() => {
    const [queryName, setQueryName] = useState('');
    const [isListVisible, setIsListVisible] = useState(false);

    const {process, setProcess, clearError, getCharacterByName} = useMarvelService();
    const {dataInfo, updateData} = useSingleData(getCharacterByName, setProcess, clearError);

    return (
        <div className={`char__search-form ${isListVisible ? 'active' : ''}`}>
            <label className="char__search-label" htmlFor="name">
                Or find a character by name:
            </label>

            <div className="char__search-wrapper">
                <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    onChange={e => {
                        setQueryName(e.target.value);
                        updateData(e.target.value);
                    }}
                    onFocus={() => setIsListVisible(true)}
                    value={queryName}
                />
            </div>

            <div className="char__search-list">
                {isListVisible && setSingleContent(process, List, dataInfo, isListVisible, queryName)}
            </div>

            {isListVisible && (
                <Portal>
                    <div className="overlay" onClick={() => setIsListVisible(false)}></div>
                </Portal>
            )}
        </div>
    );
});

export default SearchCharacterForm;

const List = ({data}) => {
    return data.map(char => {
        return (
            <Link to={`characters/${char.id}`} key={char.id}>
                <div className="char__search-list__item">
                    <img className="list__item-avatar" src={char.thumbnail} alt={char.name} />
                    <h3 className="list__item-name">{char.name}</h3>
                </div>
            </Link>
        );
    });
};

const Error = () => {
    return (
        <div style={{padding: '15px 0px 0px', textAlign: 'center'}}>
            <ErrorMessage />
            <h3>Nothing to show...</h3>
        </div>
    );
};
