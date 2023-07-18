const axios = require('axios');

function fetchData() {
  const url = 'https://api.example.com/data';

  axios.get(url)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
