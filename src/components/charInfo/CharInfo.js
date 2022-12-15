import { Component } from 'react';

import MarvelService from "../../services/MarvelService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';


class CharInfo extends Component {
    state = {
        charInfo: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount = () => {
        this.updateCharInfo();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.charId !== prevProps.charId){
            this.updateCharInfo();
        }
    }

    updateCharInfo = () => {
        const { charId } = this.props;
        if(!charId){
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
        ;
    }

    onCharLoaded = (charInfo) => {
        // console.log(charInfo);

        this.setState({
            charInfo,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }


    render(){
        const { charInfo, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const skeleton = !(loading || error || charInfo) ? <Skeleton/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !charInfo) ? <View char={charInfo}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {content}
                {spinner}
                {errorMessage}
            </div>
        )
    }
}

const View = ({char}) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    const availableImage = thumbnail.includes('image_not_available');


    const comicsList = comics.map((item, index) => {
        return(
            <li key={index} className="char__comics-item">{item.name}</li>
        )
    })

    return(
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={availableImage ? {objectFit: 'contain'} : null}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main" target={'_blank'} rel="noreferrer">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary" target={'_blank'} rel="noreferrer">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">{(comicsList.length > 0) ? (comicsList.filter((item, i) => i < 10 ? item : null)) : 'Nothing to show...'}</ul>
        </>
    )
}


export default CharInfo;