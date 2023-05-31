import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./singleCharacterLayout.scss";

const SingleCharacterLayout = ({ data }) => {
    const { name, description, pages, thumbnail, price, language } = data;
    const navigate = useNavigate();

    return (
        <div className="single-character">
            <Helmet>
                <meta name="description" content={`${name} character`} />
                <meta
                    name="keywords"
                    content={`${name}, ${name} character, ${description}`}
                />
                <title>{name}</title>
            </Helmet>

            <img src={thumbnail} alt={name} style={{ width: "293px" }} />
            <div className="single-character__info">
                <h2 className="single-character__name">{name}</h2>
                <p className="single-character__descr">{description}</p>
            </div>
            <div className="single-character__buttons">
                <Link to={"/"} className="single-character__back">
                    Back to all
                </Link>
                <p
                    onClick={() => navigate(-1)}
                    className="single-character__return"
                >
                    Return back
                </p>
            </div>
        </div>
    );
};

export default SingleCharacterLayout;
