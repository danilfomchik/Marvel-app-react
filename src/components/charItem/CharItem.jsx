import './CharItem.scss';

const CharItem = ({name, thumbnail, id, itemRefs, setCharId, focusOnItem, index}) => {
    return (
        <>
            <li
                className="char__item"
                tabIndex={0}
                onClick={() => {
                    setCharId(id);
                    focusOnItem(index);
                }}
                onKeyDown={e => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        setCharId(id);
                        focusOnItem(index);
                    }
                }}
                data-id={id}
                ref={el => {
                    if (el) {
                        itemRefs.current[index] = el;
                    }
                }}>
                <img src={thumbnail} alt={name} />
                <div className="char__name">{name}</div>
            </li>
        </>
    );
};

export default CharItem;
