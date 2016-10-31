import { validateSync } from 'class-validator'
import { TGifs, Gif } from './models'

export interface ISubredditSchema {
    data: {
        children: Array<{ data: { id: string, title: string, url: string } }>
    }
}

export const url = (key: string) => `https://www.reddit.com/r/${key}.json`

export async function fetchGifs(key: string) {
    const gifs: Array<Gif> = []

    const payload: ISubredditSchema = await window.fetch(url(key))
                                                .then(res => res.json())        
        
    payload.data.children.forEach(child => {
        const { id, title, url } = child.data
        const gif = new Gif({id, title, url})
        const errors = validateSync(gif)
        if (errors.length) {
            console.log(errors)
        }
        gifs.push(gif)
    })
    return gifs
}

export async function fetchGifsAndStore(gifs: TGifs, key: string) {
    const data = await fetchGifs(key)
    gifs.replace(data)
}
