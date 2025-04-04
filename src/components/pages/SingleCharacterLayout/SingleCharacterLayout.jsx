import {Helmet} from 'react-helmet';
import {Link, useNavigate} from 'react-router-dom';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({data}) => {
    const {name, description, thumbnail} = data;
    const navigate = useNavigate();

    return (
        <div className="single-character">
            <Helmet>
                <meta name="description" content={`${name} character`} />
                <meta name="keywords" content={`${name}, ${name} character, ${description}`} />
                <title>{name}</title>
            </Helmet>

            <div className="single-character__info-container">
                <img src={thumbnail} alt={name} className="single-character__img" />

                <div className="single-character__info">
                    <h2 className="single-character__name">{name}</h2>
                    <p className="single-character__descr">{description}</p>
                </div>
            </div>

            <div className="single-character__buttons">
                <Link to={'/'} className="single-character__back">
                    Return home
                </Link>
                <p onClick={() => navigate(-1)} className="single-character__return">
                    Return back
                </p>
            </div>
        </div>
    );
};

export default SingleCharacterLayout;
