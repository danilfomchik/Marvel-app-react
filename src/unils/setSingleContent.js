import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

const setSingleContent = (process, ViewComponent, data) => {
    switch (process) {
        case "waiting":
            return <Skeleton />;
        case "loading":
            return <Spinner />;
        case "error":
            return <ErrorMessage />;
        case "confirmed":
            return <ViewComponent data={data} />;
        default:
            throw new Error("Unexpected process state");
    }
};

export default setSingleContent;
