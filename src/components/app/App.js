import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        charId: null
    }

    updateCharId = (charId) => {
        this.setState({
            charId
        })
    }


    render(){
        const { charId } = this.state;

        return (
            <div className="app">
                <AppHeader/>
                <main>
                
                    <ErrorBoundery>
                        <RandomChar/>
                    </ErrorBoundery>

                    <div className="char__content">

                        <ErrorBoundery>
                            <CharList updateCharId={this.updateCharId} charId={charId}/>
                        </ErrorBoundery>


                        <ErrorBoundery>
                            <CharInfo charId={charId}/>
                        </ErrorBoundery>

                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;