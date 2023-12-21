import axios from 'axios';

export async function getVideos() {
    // You can await here
    const response = await axios.get('https://65803cdd6ae0629a3f54b7fb.mockapi.io/api/videos/mp4');
    return response.data.map((vi, index) => {
        vi.id = index;
        return vi;
    });
}