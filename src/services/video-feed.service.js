import axios from 'axios';
import { GET_VIDEOS_API_URL } from '../constants/variables';

export async function getVideos() {
    // You can await here
    const response = await axios.get(GET_VIDEOS_API_URL);
    return response.data.map((vi, index) => {
        vi.id = index;
        return vi;
    });
}