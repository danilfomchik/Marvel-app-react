import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./singleComicLayout.scss";

const SingleComicLayout = ({ data }) => {
    const { title, description, pages, thumbnail, price, language } = data;
    const navigate = useNavigate();

    return (
        <div className="single-comic">
            <Helmet>
                <meta name="description" content={`${title} comics book`} />
                <meta
                    name="keywords"
                    content={`${title}, ${title} comics book, ${description}`}
                />
                <title>{title}</title>
            </Helmet>

            <div className="single-comic__info-container">
                <img
                    src={thumbnail}
                    alt={title}
                    className="single-comic__img"
                />
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pages} pages</p>
                    <p className="single-comic__descr">Language: {language}</p>
                    <div className="single-comic__price">{price}$</div>
                </div>
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
        </div>
    );
};

export default SingleComicLayout;
