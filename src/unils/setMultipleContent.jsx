import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';

const setMultipleContent = (process, ViewComponent, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return newItemLoading ? <ViewComponent /> : <Spinner />;
        case 'error':
            return <ErrorMessage />;
        case 'confirmed':
            return <ViewComponent />;
        default:
            throw new Error('Unexpected process state');
    }
};

export default setMultipleContent;
