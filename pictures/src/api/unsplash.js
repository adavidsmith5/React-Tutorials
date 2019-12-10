import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d46ef069a64ed50b953340bb5c5ec8e7c92a165229ae2bbc8d90ae423f26143b'
    }
});