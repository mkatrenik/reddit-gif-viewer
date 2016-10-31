import * as React from 'react'
import GifsList from './GifsList'
import { fetchGifsAndStore } from '../domain/gifs/api'
import { gifs } from '../domain/gifs/models'
import cm from 'react-classname-module'
const styles = require('./app.css') as any;

export class App extends React.Component<{}, {}> {
    _input: HTMLInputElement;

    handleSubmit = () => {
        fetchGifsAndStore(gifs, this._input.value)
    };

    handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchGifsAndStore(gifs, e.target.value)
        }
    };

    render() {
        return <div>
            <h1>Gify.</h1>
            <div className="controlBar">
                <input type="text" onKeyPress={this.handleEnter}
                    defaultValue="gifs" ref={(node) => this._input = node}
                    />
                <button onClick={this.handleSubmit}
                    className="button">Go</button>
            </div>
            <GifsList gifs={gifs} />
        </div>
    }
}

export default cm(App, styles)
