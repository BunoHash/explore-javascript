const axios = require('axios');

function sendData() {
  const url = 'https://api.example.com/submit';
  const data = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };

  axios.post(url, data)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
