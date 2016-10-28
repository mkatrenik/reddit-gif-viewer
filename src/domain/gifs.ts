// import { observable, computed } from 'mobx'
// import { validateSync, IsUrl } from 'class-validator'
// import { parse } from 'url'

// interface SubredditSchema {
//     data: {
//         children: Array<{ data: { id: string, url: string } }>
//     }
// }


// /**
//  * fetch gifs for given subbredit
//  */
// async function fetchGifs(key: string) {
//     const gifs: Array<Gif> = []

//     try {
//         const payload: SubredditSchema = await window.fetch(`https://www.reddit.com/r/${key}.json`)
//                                                 .then(res => res.json())        
        
//         payload.data.children.forEach(child => {
//             const { id, url } = child.data
//             const gif = new Gif(id, url)
//             const errors = validateSync(gif)
//             errors.length && console.log(errors)
//             gifs.push(gif)
//         })
//     } catch (err) {
//         console.error(err)
//     }
//     return gifs
// }

// class Gif {
//     id: string

//     resourceType: 'gif' | 'video'

//     @IsUrl()
//     url: string

//     constructor(id: string, url: string) {
//         this.id = id
//         this.genUrl(url)
//     }

//     private genUrl(url: string) {
//         // TODO set resourceType
//         if (url.indexOf('gfycat') !== -1) {
//             this.resourceType = 'video'
//             const parsedUrl = parse(url)
//             this.url = `${parsedUrl.protocol}//giant.${parsedUrl.hostname}${parsedUrl.pathname}.mp4`
//         } else {
//             if (url.lastIndexOf('gifv') !== -1) {
//                 this.resourceType = 'video'
//                 this.url = url.replace('gifv', 'mp4')
//             } else {
//                 this.resourceType = 'gif'
//                 this.url = url
//             }
//         }
//     }
// }

// class State {
//     @observable gifs: Array<Gif> = []
// }

// const store = new State();

// function fetchGifsAndStore(store: State, key: string = 'gifs') {
//     return fetchGifs(key).then(gifs => store.gifs = gifs)
// }


// fetchGifsAndStore(store)

// export {
//     store,
//     State,
//     Gif,
//     fetchGifsAndStore
// }
