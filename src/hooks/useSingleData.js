import { useState, useEffect } from "react";

import useMarvelService from "../services/MarvelService";

const useSingleData = (param, getDataFunc) => {
    const [dataInfo, setDataInfo] = useState(null);
    const { clearError } = useMarvelService();

    // console.log(param, getDataFunc);

    // useEffect(() => {
    //     updateCharInfo();
    // }, [param]);

    const updateData = () => {
        if (!param) {
            return;
        }

        clearError();

        getDataFunc(param).then(onCharLoaded);
    };

    const onCharLoaded = (dataInfo) => {
        // console.log(dataInfo);

        setDataInfo(dataInfo);
    };

    return { dataInfo, updateData };
};

export default useSingleData;
