import axios from 'axios';
const KEY = "AIzaSyBRaP6BSUNn8BGUzkMYI6m2AQyFIWlZGig";
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY
    }
})
