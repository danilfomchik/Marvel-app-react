import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
    SwitchTransition,
} from "react-transition-group";

import useMarvelService from "../../services/MarvelService";
import useAllData from "../../hooks/useAllData";
import setMultipleContent from "../../unils/setMultipleContent";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.scss";

const ComicsList = () => {
    const { loading, error, process, setProcess, getAllComics } =
        useMarvelService();
    const { data, newItemLoading, offset, charEnded, updateDataList } =
        useAllData(getAllComics, setProcess);

    const nodeRef = useRef(null);

    useEffect(() => {
        updateDataList(offset, true);
    }, []);

    const renderCards = (comics) => {
        const elements = comics.map((char, i) => {
            const { homepage, thumbnail, price, id, title } = char;

            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${id}`}>
                        <img
                            src={thumbnail}
                            alt={title}
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

    return (
        <div className="comics__list">
            {setMultipleContent(
                process,
                () => renderCards(data),
                newItemLoading
            )}

            {data.length > 0 && !error && (
                <button
                    className="button button__main button__long"
                    onClick={() => updateDataList(offset)}
                    disabled={newItemLoading}
                    style={{ display: charEnded ? "none" : "block" }}
                >
                    <div className="inner">load more</div>
                </button>
            )}
        </div>
    );
};

export default ComicsList;
