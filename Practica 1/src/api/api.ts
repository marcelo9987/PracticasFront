import axios from 'axios';


export const api = axios.create({
    baseURL: "https://lessons-api.vercel.app/"
});