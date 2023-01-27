import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import useAllData from "../../hooks/useAllData";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.scss";

const ComicsList = () => {
    const { loading, error, getAllComics } = useMarvelService();
    const { data, newItemLoading, offset, charEnded, updateDataList } =
        useAllData(getAllComics);

    useEffect(() => {
        updateDataList(offset, true);
    }, []);

    // console.log("comics!");

    const renderCards = (comics) => {
        const elements = comics.map((char, i) => {
            const { homepage, thumbnail, price, id, title } = char;

            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${id}`}>
                        <img
                            src={thumbnail}
                            alt="ultimate war"
                            className="comics__item-img"
                        />
                        <div className="comics__item-name">{title}</div>
                        <div className="comics__item-price">{price}$</div>
                    </Link>
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
