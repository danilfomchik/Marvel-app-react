import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import useSingleData from "../../hooks/useSingleData";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

const CharInfo = (props) => {
    const { loading, error, getCharacter } = useMarvelService();
    const { dataInfo } = useSingleData(props.charId, getCharacter);

    const errorMessage = error ? <ErrorMessage /> : null;
    const skeleton = !(loading || error || dataInfo) ? <Skeleton /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !dataInfo) ? (
        <View char={dataInfo} />
    ) : null;

    return (
        <div className="char__info">
            {skeleton}
            {content}
            {spinner}
            {errorMessage}
        </div>
    );
};

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    const availableImage = thumbnail.includes("image_not_available");

    const comicsList = comics.map((item, index) => {
        return (
            <Link
                to={`/comics/${item.resourceURI.match(/\d+/g)[1]}`}
                key={index}
                className="char__comics-item"
            >
                <li>{item.name}</li>
            </Link>
        );
    });

    return (
        <>
            <div className="char__basics">
                <img
                    src={thumbnail}
                    alt={name}
                    style={availableImage ? { objectFit: "contain" } : null}
                />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a
                            href={homepage}
                            className="button button__main"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <div className="inner">homepage</div>
                        </a>
                        <a
                            href={wiki}
                            className="button button__secondary"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comicsList.length > 0
                    ? comicsList.filter((item, i) => (i < 10 ? item : null))
                    : "Nothing to show..."}
            </ul>
        </>
    );
};

export default CharInfo;
