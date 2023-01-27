import { useState, useEffect } from "react";

import useMarvelService from "../services/MarvelService";

const useSingleData = (id, getDataFunc) => {
    const [dataInfo, setDataInfo] = useState(null);
    const { clearError } = useMarvelService();

    useEffect(() => {
        updateCharInfo();
    }, [id]);

    const updateCharInfo = () => {
        if (!id) {
            return;
        }

        clearError();

        getDataFunc(id).then(onCharLoaded);
    };

    const onCharLoaded = (dataInfo) => {
        setDataInfo(dataInfo);
    };

    return { dataInfo };
};

export default useSingleData;
