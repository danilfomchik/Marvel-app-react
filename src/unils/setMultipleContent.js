import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

const setMultipleContent = (process, ViewComponent, newItemLoading) => {
    switch (process) {
        case "waiting":
            return <Spinner />;
            break;
        case "loading":
            return newItemLoading ? <ViewComponent /> : <Spinner />;
            break;
        case "error":
            return <ErrorMessage />;
            break;
        case "confirmed":
            return <ViewComponent />;
            break;
        default:
            throw new Error("Unexpected process state");
            break;
    }
};

export default setMultipleContent;
