// Random User API logic
var ServerActions = require('../actions/ServerActions');
var request = require('superagent');

module.exports = {

  get: function(city) {
    request.get('https://api.apixu.com/v1/forecast.json?key=f3c34b984cba4b4d864202101190203&days=5')
      .query({ q:  city})  
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        ServerActions.receiveWheather(response.body);
      });
  }
};