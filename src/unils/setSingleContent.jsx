import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';
import Spinner from '../components/spinner/Spinner';

const setSingleContent = (process, ViewComponent, {...props}) => {
    switch (process) {
        case 'waiting':
            return <Skeleton />;
        case 'loading':
            return <Spinner />;
        case 'error':
            return <ErrorMessage />;
        case 'confirmed':
            return <ViewComponent {...props} />;
        default:
            throw new Error('Unexpected process state');
    }
};

export default setSingleContent;
