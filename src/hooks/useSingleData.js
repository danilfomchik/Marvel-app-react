import { useState, useEffect } from "react";

import useMarvelService from "../services/MarvelService";

const useSingleData = (param, getDataFunc) => {
    const [dataInfo, setDataInfo] = useState(null);
    const { clearError } = useMarvelService();

    const updateData = () => {
        if (!param) {
            return;
        }

        clearError();

        getDataFunc(param).then(onCharLoaded);
    };

    const onCharLoaded = (dataInfo) => {
        setDataInfo(dataInfo);
    };

    return { dataInfo, updateData };
};

export default useSingleData;
