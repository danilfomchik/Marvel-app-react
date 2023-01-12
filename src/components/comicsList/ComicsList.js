import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.scss";
import uw from "../../resources/img/UW.png";
import xMen from "../../resources/img/x-men.png";

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const { loading, error, getAllComics } = useMarvelService();

    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    useEffect(() => {
        updateComicsList(offset, true);
    }, []);

    const updateComicsList = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllComics(offset).then(onComicsLoaded);
    };

    const onComicsLoaded = (newComics) => {
        let ended = false;
        if (newComics.length < 9) {
            ended = true;
        }

        setComics((prevComics) => [...prevComics, ...newComics]);
        setNewItemLoading(false);
        setOffset((offset) => offset + 9);
        setCharEnded(ended);
    };

    const renderCards = (comics) => {
        const elements = comics.map((char, i) => {
            const { homepage, thumbnail, price, id, title } = char;

            return (
                <li className="comics__item" key={id}>
                    <a href={homepage} target="_blank">
                        <img
                            src={thumbnail}
                            alt="ultimate war"
                            className="comics__item-img"
                        />
                        <div className="comics__item-name">{title}</div>
                        <div className="comics__item-price">{price}$</div>
                    </a>
                </li>
            );
        });

        return <ul className="comics__grid">{elements}</ul>;
    };

    const cards = renderCards(comics);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {cards}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ display: charEnded ? "none" : "block" }}
                onClick={() => updateComicsList(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default ComicsList;
