import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ErrorMessage />

            <h1 className="app__title">
                This page are <span>not found!</span>
                <br />
                Make sure you enter correct path!
            </h1>

            <p className="return-back__btn" onClick={() => navigate(-1)}>
                Return back
            </p>
        </div>
    );
};

export default Page404;
