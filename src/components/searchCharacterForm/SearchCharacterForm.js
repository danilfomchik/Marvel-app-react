import React, { useState, useEffect, useRef } from "react";
import {
    Formik,
    Form,
    Field,
    ErrorMessage as FormikErrorMessage,
} from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import useSingleData from "../../hooks/useSingleData";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Portal from "../Portal/Portal";

import "./search-character-form.scss";

const setSingleContent = (process, ViewComponent, data, queryName) => {
    switch (process) {
        case "waiting":
            return null;
            break;
        case "loading":
            return <Spinner />;
            break;
        case "error":
            return !data && queryName.length > 0 && <Error />;
            break;
        case "confirmed":
            return data.length > 0 ? <ViewComponent data={data} /> : <Error />;
            break;
        default:
            throw new Error("Unexpected process state");
            break;
    }
};

const SearchCharacterForm = () => {
    const [queryName, setQueryName] = useState("");
    const [list, setList] = useState([]);
    const [isListVisible, setIsListVisible] = useState(false);

    const {
        loading,
        error,
        process,
        setProcess,
        clearError,
        getCharacterByName,
    } = useMarvelService();

    const { dataInfo, updateData } = useSingleData(
        queryName,
        getCharacterByName,
        setProcess,
        clearError
    );

    useEffect(() => {
        updateData();
    }, [queryName]);

    // const charList = isListVisible && dataInfo && !loading && !error && (
    //     <CharList data={dataInfo} />
    // );
    // const loadingMessage = loading && !error && isListVisible && <Spinner />;
    // const errorMessage = isListVisible &&
    //     !loading &&
    //     queryName.length > 0 &&
    //     !dataInfo && <Error />;

    return (
        <div className={`char__search-form ${isListVisible ? "active" : ""}`}>
            <label className="char__search-label" htmlFor="name">
                Or find a character by name:
            </label>

            <div className="char__search-wrapper">
                <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => {
                        setQueryName(e.target.value);
                        // updateData(e.target.value);
                    }}
                    onFocus={() => setIsListVisible(true)}
                    value={queryName}
                />

                {/* <button
                    disabled={loading}
                    className="button button__main"
                    type="submit"
                >
                    <div className="inner">find</div>
                </button> */}
            </div>

            <div className="char__search-list">
                {/* {charList}
                {loadingMessage}
                {errorMessage} */}
                {isListVisible &&
                    setSingleContent(
                        process,
                        CharList,
                        dataInfo,
                        isListVisible,
                        queryName
                    )}
                {/* {statusMessage} */}
                {/* {errorMessage} */}
            </div>

            {isListVisible && (
                <Portal>
                    <div
                        className="overlay"
                        onClick={() => setIsListVisible(false)}
                    ></div>
                </Portal>
            )}
        </div>
    );
};

export default SearchCharacterForm;

const CharList = ({ data }) => {
    return data.map((char) => {
        return (
            <Link to={`characters/${char.id}`} key={char.id}>
                <div className="char__search-list__item">
                    <img
                        className="list__item-avatar"
                        src={char.thumbnail}
                        alt={char.name}
                    />
                    <h3 className="list__item-name">{char.name}</h3>
                </div>
            </Link>
        );
    });
};

const Error = () => {
    return (
        <div style={{ padding: "15px 0px 0px", textAlign: "center" }}>
            <ErrorMessage />
            <h3>Nothing to show...</h3>
        </div>
    );
};
