import Axios from 'axios';

const Api = {
    getThing: () => Axios.get(`/test`)
};

export default Api;
