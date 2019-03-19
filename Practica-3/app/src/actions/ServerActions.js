// Todo server actions
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/Constants');

module.exports = {

  receiveWheather: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.GET_WHEATHER_RESPONSE,
      response: response
    });
  },
};