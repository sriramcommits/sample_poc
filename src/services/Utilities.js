import axios from 'axios';
import config from '../actions/config';
const Communication = {
    getMethod() {
        return axios.get(config.baseUrl).then(response => { 
            return response.data; 
        })
    }
};
export default Communication;