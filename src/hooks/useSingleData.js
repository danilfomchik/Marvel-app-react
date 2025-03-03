import {useCallback, useState} from 'react';

const useSingleData = (getDataFunc, setProcess, clearError) => {
    const [dataInfo, setDataInfo] = useState(null);

    const updateData = useCallback(
        param => {
            if (!param) {
                return;
            }

            clearError();

            getDataFunc(param)
                .then(onCharLoaded)
                .then(() => setProcess('confirmed'));
        },
        [clearError, getDataFunc, setProcess],
    );

    const clearDataInfo = () => {
        setProcess('waiting');
        setDataInfo(null);
    };

    const onCharLoaded = dataInfo => {
        setDataInfo(dataInfo);
    };

    return {dataInfo, updateData, clearDataInfo};
};

export default useSingleData;
