const axios = require('axios');

const connect = (authToken) => axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  }
});


module.exports = connect;

