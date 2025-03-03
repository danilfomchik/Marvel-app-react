import img from '../../resources/img/error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
    return <img src={img} className="error-img" alt="This is error" />;
};

export default ErrorMessage;
