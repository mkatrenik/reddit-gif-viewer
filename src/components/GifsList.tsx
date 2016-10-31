import * as React from 'react'
import { observer } from 'mobx-react'
import { TGifs } from '../domain/gifs/models'
import cm from 'react-classname-module'

const styles = require('./styles.css') as any;

interface IProps { gifs: TGifs }

@observer
export class GifsList extends React.Component<IProps, {}> {
    render() {
        return <div className="list">
            {this.props.gifs.map(gif => {
                return <div key={gif.id}>
                    <h3>{gif.title}</h3>
                    {gif.resourceType === 'gif' &&
                        <img src={gif.url} className="gif" />
                    }
                    {gif.resourceType === 'video' &&
                        <video preload="auto" autoPlay={true} loop={true}>
                            <source src={gif.url} type="video/mp4"></source>
                        </video>
                    }
                </div>
            })}
        </div>;
    }
}

export default cm(GifsList, styles)
