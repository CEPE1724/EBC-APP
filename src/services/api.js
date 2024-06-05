import axios from 'axios';

class Api {
    urlBase = '';
    constructor() {
        this.urlBase = 'http://192.168.2.124:3033';
    }

    post = async (url, data) => {
        try {
            const response = await axios.post(`${this.urlBase}${url}`, data);
            return response;
        } catch (error) {
            console.error("Error post", error);
        }
    };

    get = async (url) => {
        try {
            const response = await axios.get(`${this.urlBase}${url}`);
         
            return response.data;
        } catch (error) {
            console.error("Error get", error);
        }
    };
}
export default Api;