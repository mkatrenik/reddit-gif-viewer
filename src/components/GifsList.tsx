import * as React from 'react'
import { observer } from 'mobx-react'
import { TGifs } from '../domain/gifs/models'
import { style } from 'typestyle'

interface Props { gifs: TGifs }

namespace styles {
    export const list = style({
        border: '1px solid red'
    })
}

@observer
export default class GifsList extends React.Component<Props, {}> {
    render() {
        return <div className={styles.list}>
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
        </div>;
    }
}