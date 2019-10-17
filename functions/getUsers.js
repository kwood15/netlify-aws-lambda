const axios = require('axios');

exports.handler = (event, context, callback) => {
  const API_URL = 'https://api.github.com/users';
  const API_CLIENT_ID = process.env.API_CLIENT_ID;
  const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // send response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };

  // perform api call
  const getUsers = () => {
    axios.get(URL)
      .then(response => send(response.data))
      .catch(error => send(error))
  };

  if (event.httpMethod === 'GET') {
    getUsers();
  }
};


// exports.handler = (event, context, callback) => {
//   const { name, age } = JSON.parse(event.body);

//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ 
//       msg: `Hello ${name}`,
//       age
//     })
//   });
// };
