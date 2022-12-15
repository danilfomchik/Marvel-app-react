import { Component } from "react";

import './CharItem.scss';

class CharItem extends Component{

    // new comment


    render(){
        const { name, thumbnail, id, itemRef, updateCharId, setActiveCard } = this.props;
        let availableImage = thumbnail.includes('image_not_available');

        return(
            <>
                <li className='char__item'
                    tabIndex={0}
                    onClick={() => {
                        updateCharId();
                        setActiveCard(id);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            updateCharId();
                            setActiveCard(id);
                        }
                    }}
                    data-id={id}
                    ref={itemRef}
                >
                    <img src={thumbnail} alt={name} style={availableImage ? {objectFit: 'contain'} : null}/>
                    <div className="char__name">{name}</div>
                </li>
            </>
        )
    }
}

export default CharItem; 