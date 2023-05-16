import axios from 'axios'

export const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: 'http://localhost:3000/',
})

export const geoApi = axios.create({
    baseURL: 'http://www.geonames.org/childrenJSON?geonameId=3469034',
})