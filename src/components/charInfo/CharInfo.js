import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import useSingleData from '../../hooks/useSingleData';
import setSingleContent from '../../unils/setSingleContent';

import './charInfo.scss';

const CharInfo = props => {
    const {loading, error, clearError, process, setProcess, getCharacter} = useMarvelService();
    const {dataInfo, updateData} = useSingleData(props.charId, getCharacter, setProcess, clearError);

    useEffect(() => {
        updateData();
    }, [props.charId]);

    return <div className="char__info">{setSingleContent(process, View, dataInfo)}</div>;
};

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;
    const availableImage = thumbnail.includes('image_not_available');

    const comicsList = comics.map((item, index) => {
        return (
            <Link to={`/comics/${item.resourceURI.match(/\d+/g)[1]}`} key={index} className="char__comics-item">
                <li>{item.name}</li>
            </Link>
        );
    });

    return (
        <>
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
