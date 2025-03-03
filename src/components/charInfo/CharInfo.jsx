import {useEffect} from 'react';
import {Link} from 'react-router-dom';

import useSingleData from '../../hooks/useSingleData';
import useMarvelService from '../../services/MarvelService';
import setSingleContent from '../../unils/setSingleContent';
import './charInfo.scss';

const CharInfo = ({charId, setCharId, onRemoveFocusOnItem}) => {
    const {clearError, process, setProcess, getCharacter} = useMarvelService();
    const {dataInfo, updateData, clearDataInfo} = useSingleData(getCharacter, setProcess, clearError);

    useEffect(() => {
        if (charId !== dataInfo?.id) {
            updateData(charId);
        }
    }, [charId, dataInfo?.id, updateData]);

    return (
        <div className="char__info">
            {setSingleContent(process, View, {data: dataInfo, clearDataInfo, setCharId, onRemoveFocusOnItem})}
        </div>
    );
};

const View = ({data, clearDataInfo, setCharId, onRemoveFocusOnItem}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;
    const availableImage = thumbnail.includes('image_not_available');

    const comicsList = comics.map((item, index) => {
        return (
            <Link to={`/comics/${item.resourceURI.match(/\d+/g)[1]}`} key={index} className="char__comics-item">
                <li>{item.name}</li>
            </Link>
        );
    });

    const onClearCharInfo = () => {
        clearDataInfo();
        setCharId(null);
        onRemoveFocusOnItem();
    };

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 close-icon"
                onClick={onClearCharInfo}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <div className="char__basics">
                <img src={thumbnail} alt={name} style={availableImage ? {objectFit: 'contain'} : null} />
                <div className="char__basics-container">
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main" target={'_blank'} rel="noreferrer">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary" target={'_blank'} rel="noreferrer">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comicsList.length > 0 ? comicsList.filter((item, i) => (i < 10 ? item : null)) : 'Nothing to show...'}
            </ul>
        </>
    );
};

export default CharInfo;
