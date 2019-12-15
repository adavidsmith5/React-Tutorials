import axios from 'axios';

const KEY ='AIzaSyBDofgrNNzdgs2RWyz6YzqzhVDUfiLCM8Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});