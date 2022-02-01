import axios from 'axios';
import { env } from '../config/AppConfig';
const apiKey = process.env.REACT_APP_TMDB_API;
const http = axios.create({
    baseURL: env.tmdbUrl,
    params: { apiKey },
    headers: {
        'Content-Type': 'application/json',
    },
});

export default http;