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

const SearchCharacterForm = () => {
    const [queryName, setQueryName] = useState("");
    const [list, setList] = useState([]);
    const [isListVisible, setIsListVisible] = useState(false);

    // const initialRequestInfo = {
    //     status: null,
    //     message: "",
    // };
    // const [charInfo, setCharInfo] = useState({});

    // const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

    const { loading, error, clearError, getCharacterByName } =
        useMarvelService();
    // const { dataInfo, updateData } = useSingleData(queryName, getCharacterByName);

    // useEffect(() => {
    //     updateData(queryName);
    // }, [queryName]);

    const updateData = (param) => {
        // setCharInfo({});

        clearError();

        getCharacterByName(param).then(onCharLoaded);
        // .catch(() =>
        //     setRequestInfo({
        //         status: "error",
        //         message: `The character was not found. Check the name and try again`,
        //     })
        // );
    };

    const onCharLoaded = (data) => {
        // setRequestInfo({
        //     status: "success",
        //     message: `There is! Visit ${data.name} page?`,
        // });

        setList(data);
    };

    // const errorMessage = error && (
    //     <div className="char__search-critical-error">
    //         <ErrorMessage />
    //     </div>
    // );

    // const statusMessage = !requestInfo.message ? null : requestInfo.status ===
    //   "success" ? (
    //     <>
    //         <div className={`char__search-${requestInfo.status}`}>
    //             {requestInfo.message}
    //         </div>
    //         <Link
    //             to={`characters/${charInfo.id}`}
    //             className="button button__secondary"
    //         >
    //             <div className="inner">to page</div>
    //         </Link>
    //     </>
    // ) : (
    //     <div className={`char__search-${requestInfo.status}`}>
    //         {requestInfo.message}
    //     </div>
    // );

    const charList = isListVisible && list && !loading && !error && (
        <CharList data={list} />
    );
    const loadingMessage = loading && !error && isListVisible && <Spinner />;
    const errorMessage = isListVisible &&
        !loading &&
        queryName.length > 0 &&
        list.length === 0 && <Error />;

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
                        updateData(e.target.value);
                    }}
                    onFocus={() => setIsListVisible(true)}
                    // onBlur={() => setIsListVisible(false)}
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
                {charList}
                {loadingMessage}
                {errorMessage}
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

{
    /* <Formik
    initialValues={{ name: "" }}
    validationSchema={yup.object({
        name: yup
            .string()
            .min(2, "Min length - 2 characters!")
            .required("This field is required"),
    })}
    validateOnChange
    onSubmit={(values) => {
        updateData(values.name);
    }}
>
    {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    }) => (
        <Form>
            <label className="char__search-label" htmlFor="name">
                Or find a character by name:
            </label>

            <div className="char__search-wrapper">
                <Field
                    className="char__search-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                >
                    {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta,
                    }) => (
                        <div>
                            <input
                                type="text"
                                placeholder="Enter name"
                                {...field}
                                onChange={(e) => {
                                    handleChange(e);
                                    setRequestInfo(initialRequestInfo);
                                }}
                                value={values.name}
                            />
                        </div>
                    )}
                </Field>

                <button
                    disabled={loading}
                    className="button button__main"
                    type="submit"
                >
                    <div className="inner">find</div>
                </button>
            </div>

            <div className="char__search-info">
                <FormikErrorMessage
                    component="div"
                    className="char__search-error"
                    name="name"
                />

                {statusMessage}
                {errorMessage}
            </div>
        </Form>
    )}
</Formik>; */
}
