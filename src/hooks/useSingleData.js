import {useState, useEffect} from 'react';

import useMarvelService from '../services/MarvelService';

const useSingleData = (param, getDataFunc, setProcess, clearError) => {
    const [dataInfo, setDataInfo] = useState(null);

    const updateData = () => {
        if (!param) {
            return;
        }

        clearError();

        getDataFunc(param)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    };

    const onCharLoaded = dataInfo => {
        setDataInfo(dataInfo);
    };

    return {dataInfo, updateData};
};

export default useSingleData;
