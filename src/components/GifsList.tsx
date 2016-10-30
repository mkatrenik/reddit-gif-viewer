import * as React from 'react'
import { observer } from 'mobx-react'
import { TGifs } from '../domain/gifs/models'
import cm from 'react-classname-module'

const styles = require('./styles.css') as any;

interface IProps { gifs: TGifs }

@observer
export class GifsList extends React.Component<IProps, {}> {
    render() {
        return <ul className="list">
            <li>asaa</li>
            {this.props.gifs.map(gif => {
                return <li key={gif.id}>
                    {gif.resourceType === 'gif' &&
                        <img src={gif.url}/>
                    }
                    {gif.resourceType === 'video' &&
                        <video preload="auto" autoPlay={true} loop={true} style={{width: '200px', height: '200px'}}>
                            <source src={gif.url} type="video/mp4"></source>
                        </video>
                    }
                </li>
            })}
        </ul>;
    }
}

export default cm(GifsList, styles)
