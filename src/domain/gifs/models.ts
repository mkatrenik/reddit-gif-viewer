import { observable, computed } from 'mobx'
import { parse } from 'url'
import { IsUrl } from 'class-validator'
import { IObservableArray } from 'mobx'


class Gif {
    id: string

    resourceType: 'gif' | 'video'

    @IsUrl()
    url: string

    constructor(id: string, url: string) {
        this.id = id
        this.genUrl(url)
    }

    private genUrl(url: string) {
        // TODO set resourceType
        if (url.indexOf('gfycat') !== -1) {
            this.resourceType = 'video'
            const parsedUrl = parse(url)
            this.url = `${parsedUrl.protocol}//giant.${parsedUrl.hostname}${parsedUrl.pathname}.mp4`
        } else {
            if (url.lastIndexOf('gifv') !== -1) {
                this.resourceType = 'video'
                this.url = url.replace('gifv', 'mp4')
            } else {
                this.resourceType = 'gif'
                this.url = url
            }
        }
    }
}

export type TGifs = IObservableArray<Gif>
const gifs: TGifs = observable([])

export {
    gifs,
    Gif
}
