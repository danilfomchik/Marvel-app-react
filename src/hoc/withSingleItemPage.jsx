import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import useMarvelService from '../services/MarvelService';
import useSingleData from '../hooks/useSingleData';
import setSingleContent from '../unils/setSingleContent';

import Spinner from '../components/spinner/Spinner';
import Page404 from '../components/pages/404';

const withSingleItemPage = (WrappedComponent, dataType) => {
    return props => {
        const {itemId} = useParams();

        const {loading, error, clearError, process, setProcess, getComic, getCharacter} = useMarvelService();
        const {dataInfo, updateData} = useSingleData(
            itemId,
            dataType === 'character' ? getCharacter : getComic,
            setProcess,
            clearError,
        );

        useEffect(() => {
            updateData();
        }, [itemId]);

        return <>{setSingleContent(process, WrappedComponent, dataInfo)}</>;
    };
};

export default withSingleItemPage;
