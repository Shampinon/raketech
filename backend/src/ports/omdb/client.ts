import axios from 'axios'

import { config } from '../../config'

export const client = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: config.omdb.apiKey
    },
})
