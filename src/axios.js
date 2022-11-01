import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-looku-ecommerce.cloudfunctions.net/api',
  //'http://localhost:5001/looku-ecommerce/us-central1/api',
});

export default instance;
