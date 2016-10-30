import * as React from 'react'
import { observer } from 'mobx-react'
import { TGifs } from '../domain/gifs/models'
const styles = require('./styles.css') as any;


interface Props { gifs: TGifs }


@observer
export default class GifsList extends React.Component<Props, {}> {
    render() {
        return <ul className={styles.list}>
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