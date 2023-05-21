import { useNavigate, useParams, Link } from "react-router-dom";

import "./singleComicPage.scss";

const SingleCharacterLayout = ({ data }) => {
    const { name, description, pages, thumbnail, price, language } = data;
    const navigate = useNavigate();

    return (
        <>
            <img src={thumbnail} alt={name} style={{ width: "293px" }} />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <div className="single-comic__buttons">
                <Link to={"/"} className="single-comic__back">
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

export default SingleCharacterLayout;
