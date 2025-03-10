import {useCallback, useState} from 'react';

const useAllData = (getDataFunc, setProcess) => {
    const [data, setData] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const updateDataList = useCallback(
        initial => {
            setNewItemLoading(initial);

            getDataFunc(offset)
                .then(onDataLoaded)
                .then(() => setProcess('confirmed'));
        },
        [offset, getDataFunc, setProcess],
    );

    const onDataLoaded = newData => {
        let ended = false;
        if (newData.length < 9) {
            ended = true;
        }

        setData(prevData => [...prevData, ...newData]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    };

    return {
        data,
        newItemLoading,
        offset,
        charEnded,
        updateDataList,
    };
};

export default useAllData;
