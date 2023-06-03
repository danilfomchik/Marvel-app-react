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

    // console.log("comics!");

    // let routeRefs = useRef([]);

    // const timeout = 300;
    const renderCards = (comics) => {
        const elements = comics.map((char, i) => {
            const { homepage, thumbnail, price, id, title } = char;

            // routeRefs.current[i] = null;

            return (
                // <CSSTransition
                //     in={!loading}
                //     nodeRef={routeRefs.current[i]}
                //     timeout={300}
                //     classNames="comics-item"
                //     key={id}
                // >
                <li
                    className="comics__item"
                    key={i}
                    // ref={(el) => (routeRefs.current[i] = el)}
                >
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
                // </CSSTransition>
            );
        });

        return (
            <ul className="comics__grid">
                {elements}
                {/* <TransitionGroup component={null}>{elements}</TransitionGroup> */}
            </ul>
        );
    };

    // const cards = renderCards(data);

    // const errorMessage = error ? <ErrorMessage /> : null;
    // const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {/* {errorMessage} */}
            {/* {spinner} */}

            {setMultipleContent(
                process,
                () => renderCards(data),
                newItemLoading
            )}

            {/* <TransitionGroup> */}
            {/* <CSSTransition
                in={!loading}
                timeout={300}
                classNames="comics__item"
                // unmountOnExit
            > */}
            {/* {cards} */}
            {/* </CSSTransition> */}
            {/* </TransitionGroup> */}

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
