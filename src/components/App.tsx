import * as React from "react";
import GifsList from './GifsList'
import { fetchGifsAndStore } from '../domain/gifs/api'
import { gifs } from '../domain/gifs/models'


export class App extends React.Component<{}, {}> {

    setSubreddit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            fetchGifsAndStore(gifs, e.target.value)
        }
    };

    render() {
        return <div>
            <input type="text" onKeyPress={this.setSubreddit} defaultValue="gifs" />
            <GifsList gifs={gifs} />
        </div>
    }
}