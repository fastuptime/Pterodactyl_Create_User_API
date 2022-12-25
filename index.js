var request = require('request');
let config = require('./config.json');

var options = {
  'method': 'POST',
  'url': `${config.url}/api/application/users`,
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${config.token}`
  },
  body: JSON.stringify({
    "email": "example10@example.com",
    "username": "exampleuser",
    "first_name": "Example",
    "last_name": "User"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  console.log(`User created with id: ${JSON.parse(response.body).id}`);
});
