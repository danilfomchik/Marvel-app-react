import {memo, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import useSingleData from '../../hooks/useSingleData';
import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelService from '../../services/MarvelService';
import setSingleContent from '../../unils/setSingleContent';
import './randomChar.scss';

const RandomChar = () => {
    const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    const [id, setId] = useState(randomId);

    const {loading, process, setProcess, getCharacter, clearError} = useMarvelService();
    const {dataInfo, updateData} = useSingleData(getCharacter, setProcess, clearError);

    useEffect(() => {
        if (process === 'waiting') {
            updateData(id);
        }
    }, [id, dataInfo?.id, process, updateData]);

    return (
        <div className="randomchar">
            <CSSTransition in={!loading} timeout={300} classNames="randomchar-animation">
                <div className="randomchar__content">{setSingleContent(process, View, dataInfo)}</div>
            </CSSTransition>

            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!
                    <br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">Or choose another one</p>
                <button
                    className="button button__main"
                    onClick={() => {
                        setId(randomId);
                        updateData(randomId);
                    }}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    );
};

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki} = data;

    let imgStyle = {objectFit: 'cover'};

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {objectFit: 'fill'};
    }

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt={name} className="randomchar__img" style={imgStyle} />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">{description}</p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main" target={'_blank'} rel="noreferrer">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary" target={'_blank'} rel="noreferrer">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default memo(RandomChar);
