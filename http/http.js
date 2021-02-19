import axios from 'axios';

const http = axios.create({
  baseURL:'https://api.66mz8.com/api/music.163.php'
});

export default http