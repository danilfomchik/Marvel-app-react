import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import PropTypes from 'prop-types';

import CharItem from '../charItem/CharItem';

import './charList.scss';

// comment changed

class CharList extends Component {
    state = {
        characters: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount = () => {
        const { offset } = this.state;

        this.updateCharactersList(offset);
        window.addEventListener('scroll', this.onScrollPage)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.onScrollPage);
    }

    onScrollPage = () => {
        const { newItemLoading, offset } = this.state;

        // Нам потребуется знать высоту документа и высоту экрана:
        const height = document.body.offsetHeight;
        const screenHeight = window.innerHeight;

        // // Записываем, сколько пикселей пользователь уже проскроллил:
        const scrolled = window.scrollY;

        // // Обозначим порог, по приближении к которому
        // // будем вызывать какое-то действие.
        // // В нашем случае — четверть экрана до конца страницы:
        const threshold = height - ((screenHeight / 16) - 30);

        // // Отслеживаем, где находится низ экрана относительно страницы:
        const position = scrolled + screenHeight;

        // Если мы пересекли полосу-порог и новые элементы ещё не подгружаются, вызываем нужное действие.
        if (position >= threshold && !newItemLoading) {
            console.log(newItemLoading);
            this.onListLoading();

            console.log(offset);
            this.updateCharactersList(offset);
        }
    }

    updateCharactersList = (offset) => {
        this.onListLoading();

        this.marvelService
            .getAllCharacters(offset)
            .then(this.onListLoaded)
            .catch(this.onError)
        ;
    }

    onListLoaded = (newCharacters) => {
        let ended = false;
        if(newCharacters.length < 9){
            ended = true;
        }

        this.setState(({offset, characters}) => ({
            characters: [...characters, ...newCharacters],
            newItemLoading: false,
            loading: false,
            error: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onListLoading = () => {
        this.setState({
            newItemLoading: true,
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }


    
    itemRefs = [];

    setItemRef = ref => {
        this.itemRefs.push(ref);
    };
    
    setActiveCharCard = (id) => {
        this.itemRefs.forEach(card => {
            card.classList.remove('char__item_selected')

            if(+card.getAttribute('data-id') === id){
                card.classList.add('char__item_selected');
            }
        })
    };

    renderCards(characters) {
        const { charId, updateCharId } = this.props;

        const elements = characters.map((char, i) => {
            return (
                <CharItem 
                    setActiveCard={this.setActiveCharCard}
                    itemRef={this.setItemRef}
                    key={char.id} 
                    id={char.id} 
                    name={char.name} 
                    thumbnail={char.thumbnail} 
                    updateCharId={() => updateCharId(char.id)}
                />
            )
        });
    
        return (
            <ul className="char__grid">
                {elements}
            </ul>
        )
    }


    render(){
        const {characters, newItemLoading, loading, error, charEnded, offset} = this.state;

        const cards = this.renderCards(characters);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? cards : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                    className="button button__main button__long"
                    onClick={() => this.updateCharactersList(offset)}
                    disabled={newItemLoading}
                    style={{display: charEnded ? 'none' : 'block'}}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}


CharList.propTypes = {
    updateCharId: PropTypes.func.isRequired
}

export default CharList;