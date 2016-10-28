import { validateSync, IsUrl } from 'class-validator'
import { TGifs, Gif } from './models'


export interface SubredditSchema {
    data: {
        children: Array<{ data: { id: string, url: string } }>
    }
}

export const url = (key: string) => `https://www.reddit.com/r/${key}.json`

export async function fetchGifs(key: string) {
    const gifs: Array<Gif> = []

    const payload: SubredditSchema = await window.fetch(url(key))
                                                .then(res => res.json())        
        
    payload.data.children.forEach(child => {
        const { id, url } = child.data
        const gif = new Gif(id, url)
        const errors = validateSync(gif)
        errors.length && console.log(errors)
        gifs.push(gif)
    })
    return gifs
}

export async function fetchGifsAndStore(gifs: TGifs, key: string) {
    const data = await fetchGifs(key)
    gifs.replace(data)
}
