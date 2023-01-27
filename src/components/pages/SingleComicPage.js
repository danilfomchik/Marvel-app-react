import { useNavigate, useParams, Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import useSingleData from "../../hooks/useSingleData";

import Spinner from "../spinner/Spinner";
import Page404 from "./404";

import "./singleComicPage.scss";

const SingleComicPage = () => {
    const { comicId } = useParams();
    console.log(comicId);

    const { loading, error, getComic } = useMarvelService();
    const { dataInfo } = useSingleData(comicId, getComic);

    const errorMessage = error ? <Page404 /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !dataInfo) ? (
        <View comic={dataInfo} />
    ) : null;

    return (
        <div
            className="single-comic"
            style={
                error || loading
                    ? { gridTemplateColumns: "none" }
                    : { gridTemplateColumns: "293px 550px auto" }
            }
        >
            {content}
            {spinner}
            {errorMessage}
        </div>
    );
};

const View = ({ comic }) => {
    const { title, description, pages, thumbnail, price, language } = comic;
    const navigate = useNavigate();

    return (
        <>
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pages} pages</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}$</div>
            </div>
            <div className="single-comic__buttons">
                <Link to={"/comics"} className="single-comic__back">
                    Back to all
                </Link>
                <p
                    onClick={() => navigate(-1)}
                    className="single-comic__return"
                >
                    Return back
                </p>
            </div>
        </>
    );
};

export default SingleComicPage;
