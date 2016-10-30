import * as React from 'react'
import GifsList from './GifsList'
import { fetchGifsAndStore } from '../domain/gifs/api'
import { gifs } from '../domain/gifs/models'

const styles: any = {
    controlBar: '',
    input: '',
    button: ''
}

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
            <div className={styles.controlBar}>
                <input type="text" onKeyPress={this.handleEnter}
                    defaultValue="gifs" ref={(node) => this._input = node}
                    className={styles.input}
                    />
                <button onClick={this.handleSubmit} className={styles.button}>Go</button>
            </div>
            <GifsList gifs={gifs} />
        </div>
    }
}