import { fetchGifsAndStore, fetchGifs, ISubredditSchema, url } from '../api'
import { Gif, gifs } from '../models'
import * as fetchMock from 'fetch-mock'


const fooRes: ISubredditSchema = {
    data: {
        children: [
            {
                data: {
                    id: '1', url: 'foo.bar'
                }
            }
        ]
    }
}

describe('fetchGifs()', () => {
    afterEach(() => fetchMock.restore())

    it('returns data on valid subreddit key', async () => {
        fetchMock.get(url('foo'), fooRes)
        const data = await fetchGifs('foo')
        expect(data.length).toEqual(1)
        expect(data[0]).toBeInstanceOf(Gif)
    })

    it('returns exception on invalid subreddit', async () => {
        fetchMock.get(url('foo'), {})
        try {
            await fetchGifs('fooooo') 
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }
    })
})

describe('fetchGifsAndStore()', () => {
    it('fetch data and populate store', async () => {
        fetchMock.get(url('foo'), fooRes)
        await fetchGifsAndStore(gifs, 'foo')
        expect(gifs.length).toEqual(1)
        expect(gifs[0]).toBeInstanceOf(Gif)
    })
})
