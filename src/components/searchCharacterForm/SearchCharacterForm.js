import React, { useState } from "react";
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

import ErrorMessage from "../errorMessage/ErrorMessage";

import "./search-character-form.scss";

const SearchCharacterForm = () => {
    // const [queryName, setQueryName] = useState("");
    const initialRequestInfo = {
        status: null,
        message: "",
    };
    const [charInfo, setCharInfo] = useState({});

    const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

    const { loading, error, clearError, getCharacterByName } =
        useMarvelService();
    // const { dataInfo, updateData } = useSingleData(queryName, getCharacterByName);

    // useEffect(() => {
    //     updateData();
    // }, [props.charId]);

    const updateData = (param) => {
        setCharInfo({});

        clearError();

        getCharacterByName(param)
            .then(onCharLoaded)
            .catch(() =>
                setRequestInfo({
                    status: "error",
                    message: `The character was not found. Check the name and try again`,
                })
            );
    };

    const onCharLoaded = (data) => {
        setRequestInfo({
            status: "success",
            message: `There is! Visit ${data.name} page?`,
        });

        setCharInfo(data);
    };

    const errorMessage = error && (
        <div className="char__search-critical-error">
            <ErrorMessage />
        </div>
    );

    const statusMessage = !requestInfo.message ? null : requestInfo.status ===
      "success" ? (
        <>
            <div className={`char__search-${requestInfo.status}`}>
                {requestInfo.message}
            </div>
            <Link
                to={`characters/${charInfo.id}`}
                className="button button__secondary"
            >
                <div className="inner">to page</div>
            </Link>
        </>
    ) : (
        <div className={`char__search-${requestInfo.status}`}>
            {requestInfo.message}
        </div>
    );

    return (
        <div className="char__search-form">
            <Formik
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
                    /* and other goodies */
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
                                                setRequestInfo(
                                                    initialRequestInfo
                                                );
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
            </Formik>
        </div>
    );
};

export default SearchCharacterForm;
