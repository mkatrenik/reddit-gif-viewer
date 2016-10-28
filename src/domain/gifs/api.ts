import { validateSync, IsUrl } from 'class-validator'
import { TGifs, Gif } from './models'


interface SubredditSchema {
    data: {
        children: Array<{ data: { id: string, url: string } }>
    }
}

/**
 * fetch gifs for given subbredit
 */
async function fetchGifs(key: string) {
    const gifs: Array<Gif> = []

    try {
        const payload: SubredditSchema = await window.fetch(`https://www.reddit.com/r/${key}.json`)
                                                .then(res => res.json())        
        
        payload.data.children.forEach(child => {
            const { id, url } = child.data
            const gif = new Gif(id, url)
            const errors = validateSync(gif)
            errors.length && console.log(errors)
            gifs.push(gif)
        })
    } catch (err) {
        console.error(err)
    }
    return gifs
}

export async function fetchGifsAndStore(gifs: TGifs, key: string) {
    const data = await fetchGifs(key)
    gifs.replace(data)
}
