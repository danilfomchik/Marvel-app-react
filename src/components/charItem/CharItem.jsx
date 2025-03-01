import './CharItem.scss';

const CharItem = props => {
    const {name, thumbnail, id, itemRefs, setCharId, focusOnItem, isActive, index} = props;

    let availableImage = thumbnail.includes('image_not_available');

    const cardClass = 'char__item';

    return (
        <>
            <li
                className={cardClass}
                tabIndex={0}
                onClick={() => {
                    setCharId(id);
                    focusOnItem(index);
                }}
                onKeyPress={e => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        setCharId(id);
                        focusOnItem(index);
                    }
                }}
                data-id={id}
                ref={el => (itemRefs.current[index] = el)}>
                <img src={thumbnail} alt={name} />
                <div className="char__name">{name}</div>
            </li>
        </>
    );
};

export default CharItem;
