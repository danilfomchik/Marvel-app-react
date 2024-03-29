import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import useAllData from "../../hooks/useAllData";
import useMarvelService from "../../services/MarvelService";
import setMultipleContent from "../../unils/setMultipleContent";

import PropTypes from "prop-types";

import CharItem from "../charItem/CharItem";

import "./charList.scss";

const CharList = (props) => {
    const { loading, error, process, setProcess, getAllCharacters } =
        useMarvelService();
    const { data, newItemLoading, offset, charEnded, updateDataList } =
        useAllData(getAllCharacters, setProcess);

    useEffect(() => {
        updateDataList(offset, true);
        // window.addEventListener("scroll", onScrollPage);

        // return () => {
        //     window.removeEventListener("scroll", onScrollPage);
        // };
    }, []);

    const onScrollPage = () => {
        // Нам потребуется знать высоту документа и высоту экрана:
        const height = document.body.offsetHeight;
        const screenHeight = window.innerHeight;

        // // Записываем, сколько пикселей пользователь уже проскроллил:
        const scrolled = window.scrollY;

        // // Обозначим порог, по приближении к которому
        // // будем вызывать какое-то действие.
        // // В нашем случае — четверть экрана до конца страницы:
        const threshold = height - (screenHeight / 16 - 30);

        // // Отслеживаем, где находится низ экрана относительно страницы:
        const position = scrolled + screenHeight;

        // Если мы пересекли полосу-порог и новые элементы ещё не подгружаются, вызываем нужное действие.
        if (position >= threshold && !newItemLoading) {
            updateDataList(offset, true);
        }
    };

    // const itemRefs = useRef([]);

    // const setActiveCharCard = (id) => {
    //     itemRefs.current.forEach((card) => {
    //         card.classList.remove("char__item_selected");

    //         if (+card.getAttribute("data-id") === id) {
    //             card.classList.add("char__item_selected");
    //         }
    //     });
    // };

    const renderCards = (data) => {
        const { updateCharId } = props;
        const timeout = 300;

        const elements = data.map((char, i) => {
            return (
                <CSSTransition
                    key={char.id}
                    timeout={timeout}
                    // onEnter={() => setTimeout((prev) => prev + 20)}
                    // onExited={() => setTimeout(100)}
                    classNames="char-item"
                    unmountOnExit
                >
                    <CharItem
                        // setActiveCard={setActiveCharCard}
                        // itemRef={(el) => (itemRefs.current[i] = el)}
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        isActive={props.charId === char.id}
                        thumbnail={char.thumbnail}
                        updateCharId={() => updateCharId(char.id)}
                    />
                </CSSTransition>
            );
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>{elements}</TransitionGroup>
            </ul>
        );
    };

    // const cards = renderCards(data);

    // const errorMessage = error ? <ErrorMessage /> : null;
    // const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {/* {errorMessage}
            {spinner}
            {cards} */}
            {setMultipleContent(
                process,
                () => renderCards(data),
                newItemLoading
            )}
            <button
                className="button button__main button__long"
                onClick={() => updateDataList(offset)}
                disabled={newItemLoading}
                style={{ display: charEnded ? "none" : "block" }}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

CharList.propTypes = {
    updateCharId: PropTypes.func.isRequired,
};

export default CharList;
