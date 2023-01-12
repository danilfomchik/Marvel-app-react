import React, { useState, useEffect, useRef } from "react";
import Spinner from "../spinner/Spinner";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import PropTypes from "prop-types";

import CharItem from "../charItem/CharItem";

import "./charList.scss";

const CharList = (props) => {
    const [characters, setCharacters] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        updateCharactersList(offset, true);
        // window.addEventListener("scroll", onScrollPage);

        // return () => {
        //     window.removeEventListener("scroll", onScrollPage);
        // };
    }, []);

    // ДОДЕЛАТЬ ФУНКЦИОНАЛ ПОДГРУЗКИ ПЕРСОНАЖЕЙ ПО СКОРОЛЛУ

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
            updateCharactersList(offset);
        }
    };

    // вынести в пользовательский хук и использовать для комиксов и для персонажей
    const updateCharactersList = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);

        getAllCharacters(offset).then(onListLoaded);
    };

    const onListLoaded = (newCharacters) => {
        let ended = false;
        if (newCharacters.length < 9) {
            ended = true;
        }

        setCharacters((prevChars) => [...prevChars, ...newCharacters]);
        setNewItemLoading(false);
        setOffset((offset) => offset + 9);
        setCharEnded(ended);
    };
    // вынести в пользовательский хук и использовать для комиксов и для персонажей

    const itemRefs = useRef([]);

    const setActiveCharCard = (id) => {
        itemRefs.current.forEach((card) => {
            card.classList.remove("char__item_selected");

            if (+card.getAttribute("data-id") === id) {
                card.classList.add("char__item_selected");
            }
        });
    };

    const renderCards = (characters) => {
        const { updateCharId } = props;

        const elements = characters.map((char, i) => {
            return (
                <CharItem
                    setActiveCard={setActiveCharCard}
                    itemRef={(el) => (itemRefs.current[i] = el)}
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    thumbnail={char.thumbnail}
                    updateCharId={() => updateCharId(char.id)}
                />
            );
        });

        return <ul className="char__grid">{elements}</ul>;
    };

    const cards = renderCards(characters);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {cards}
            <button
                className="button button__main button__long"
                onClick={() => updateCharactersList(offset)}
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
