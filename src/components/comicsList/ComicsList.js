import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import useGetData from "../../hooks/getData";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.scss";

const ComicsList = () => {
    const { loading, error, getAllComics } = useMarvelService();
    const { data, newItemLoading, offset, charEnded, updateDataList } =
        useGetData(getAllComics);

    useEffect(() => {
        updateDataList(offset, true);
    }, []);

    const renderCards = (comics) => {
        const elements = comics.map((char, i) => {
            const { homepage, thumbnail, price, id, title } = char;

            return (
                <li className="comics__item" key={i}>
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

    const cards = renderCards(data);

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
                onClick={() => updateDataList(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default ComicsList;
