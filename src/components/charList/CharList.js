import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
} from "react";
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
    }, []);

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach((item) =>
            item.classList.remove("char__item_selected")
        );
        itemRefs.current[id].classList.add("char__item_selected");
        itemRefs.current[id].focus();
    };

    const renderCards = (data) => {
        console.log("render");
        const { setCharId, charId } = props;
        const timeout = 300;

        const elements = data.map((char, i) => {
            return (
                <CSSTransition
                    key={char.id}
                    timeout={timeout}
                    classNames="char-item"
                    unmountOnExit
                >
                    <CharItem
                        index={i}
                        itemRefs={itemRefs}
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        thumbnail={char.thumbnail}
                        setCharId={() => setCharId(char.id)}
                        focusOnItem={focusOnItem}
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

    const elements = useMemo(() => {
        return setMultipleContent(
            process,
            () => renderCards(data),
            newItemLoading
        );
    }, [process]);

    console.log("elements-->", data);

    return (
        <div className="char__list">
            {elements}

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

CharList.propTypes = {
    setCharId: PropTypes.func.isRequired,
};

export default CharList;
