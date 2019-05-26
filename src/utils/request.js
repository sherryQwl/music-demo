import axios from 'axios';


const server = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 1000,
});

// Add a request interceptor
server.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
server.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status == '200') {
      return response.data;
    }
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default server;