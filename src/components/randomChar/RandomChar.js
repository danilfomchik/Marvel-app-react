import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount(){
        this.updateChar();
        // this.timerId = setInterval(this.updateChar, 5000);

        // console.log('mount');
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
        
        // console.log('unmount');
    }

    onCharLoaded = (char) => {
        // console.log('update');
        
        this.setState({
            char, 
            loading: false,
            error: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        this.onCharLoading();

        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
        ;
    }

    render(){
        // console.log('render');

        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" disabled={error ? true : false} onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const { name, description, thumbnail, homepage, wiki } = char;
    let availableImage = thumbnail.includes('image_not_available');


    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt={name} className="randomchar__img" style={availableImage ? {objectFit: 'contain'} : null}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">{description}</p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main" target={'_blank'} rel="noreferrer">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary" target={'_blank'} rel="noreferrer">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;