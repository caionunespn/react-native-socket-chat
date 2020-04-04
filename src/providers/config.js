import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.5.99:8000',
});
