import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useSingleData from '../hooks/useSingleData';
import useMarvelService from '../services/MarvelService';
import setSingleContent from '../unils/setSingleContent';

const withSingleItemPage = (WrappedComponent, dataType) => {
    return () => {
        const {itemId} = useParams();

        const {clearError, process, setProcess, getComic, getCharacter} = useMarvelService();
        const {dataInfo, updateData} = useSingleData(
            dataType === 'character' ? getCharacter : getComic,
            setProcess,
            clearError,
        );

        useEffect(() => {
            if (process === 'waiting') {
                updateData(itemId);
            }
        }, [updateData, itemId, process]);

        return <>{setSingleContent(process, WrappedComponent, dataInfo)}</>;
    };
};

export default withSingleItemPage;
