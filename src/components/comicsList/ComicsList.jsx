import {useEffect} from 'react';
import {Link} from 'react-router-dom';

import useAllData from '../../hooks/useAllData';
import useMarvelService from '../../services/MarvelService';
import setMultipleContent from '../../unils/setMultipleContent';
import './comicsList.scss';

const ComicsList = () => {
    const {error, process, setProcess, getAllComics} = useMarvelService();
    const {data, newItemLoading, charEnded, updateDataList} = useAllData(getAllComics, setProcess);

    useEffect(() => {
        if (process === 'waiting' && !data.length) {
            updateDataList(false);
        }
    }, [data.length, updateDataList, process]);

    const renderCards = comics => {
        const elements = comics.map((char, i) => {
            const {thumbnail, price, id, title} = char;

            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${id}`}>
                        <img src={thumbnail} alt={title} className="comics__item-img" />
                        <div className="comics__item-name">{title}</div>
                        <div className="comics__item-price">{price}$</div>
                    </Link>
                </li>
            );
        });

        return <ul className="comics__grid">{elements}</ul>;
    };

    return (
        <div className="comics__list">
            {setMultipleContent(process, () => renderCards(data), newItemLoading)}

            {data.length > 0 && !error && (
                <button
                    className="button button__main button__long"
                    onClick={() => updateDataList(true)}
                    disabled={newItemLoading}
                    style={{display: charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            )}
        </div>
    );
};

export default ComicsList;
