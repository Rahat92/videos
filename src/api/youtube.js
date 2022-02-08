import axios from 'axios';
const KEY = "AIzaSyBEzpLQZ-fkmfS1a1jgWQqcnz-sHVD-aQA";
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY
    }
})
