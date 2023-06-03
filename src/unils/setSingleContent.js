import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

const setSingleContent = (process, ViewComponent, data) => {
    switch (process) {
        case "waiting":
            return <Skeleton />;
            break;
        case "loading":
            return <Spinner />;
            break;
        case "error":
            return <ErrorMessage />;
            break;
        case "confirmed":
            return <ViewComponent data={data} />;
            break;
        default:
            throw new Error("Unexpected process state");
            break;
    }
};

export default setSingleContent;
