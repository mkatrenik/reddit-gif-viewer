import { fetchGifsAndStore } from './api'
import { gifs } from './models'


fetchGifsAndStore(gifs, 'gifs')