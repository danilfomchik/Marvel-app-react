import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useMemo} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import useAllData from '../../hooks/useAllData';
import useMarvelService from '../../services/MarvelService';
import setMultipleContent from '../../unils/setMultipleContent';
import CharItem from '../charItem/CharItem';
import './charList.scss';

const CharList = ({itemRefs, setCharId, onRemoveFocusOnItem}) => {
    const {error, process, setProcess, getAllCharacters} = useMarvelService();
    const {data, newItemLoading, charEnded, updateDataList} = useAllData(getAllCharacters, setProcess);

    useEffect(() => {
        if (process === 'waiting' && !data.length) {
            updateDataList(false);
        }
    }, [data.length, process, updateDataList]);

    const focusOnItem = useCallback(
        id => {
            onRemoveFocusOnItem();
            itemRefs?.current[id].classList.add('char__item_selected');
            itemRefs?.current[id].focus();
        },
        [itemRefs, onRemoveFocusOnItem],
    );

    const renderCards = useCallback(
        data => {
            const timeout = 300;

            const elements = data.map((char, i) => {
                return (
                    <CSSTransition key={char.id} timeout={timeout} classNames="char-item" unmountOnExit>
                        <CharItem
                            index={i}
                            itemRefs={itemRefs}
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            thumbnail={char.thumbnail}
                            setCharId={() => setCharId(char.id)}
                            focusOnItem={focusOnItem}
                        />
                    </CSSTransition>
                );
            });

            return (
                <ul className="char__grid">
                    <TransitionGroup component={null}>{elements}</TransitionGroup>
                </ul>
            );
        },
        [focusOnItem, itemRefs, setCharId],
    );

    const elements = useMemo(() => {
        return setMultipleContent(process, () => renderCards(data), newItemLoading);
    }, [data, newItemLoading, process, renderCards]);

    return (
        <div className="char__list">
            {elements}

            {data.length > 0 && !error && (
                <button
                    className="button button__main button__long"
                    onClick={() => updateDataList(true)}
                    disabled={newItemLoading}
                    style={{display: charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            )}
        </div>
    );
};

CharList.propTypes = {
    setCharId: PropTypes.func.isRequired,
};

export default CharList;
