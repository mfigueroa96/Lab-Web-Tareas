// Todo server actions
//import constants from "../constants/Constants"
import constants from "../constants/Constants"
var AppDispatcher = require('../dispatcher/AppDispatcher').default;
//var constants = require("../constants/Constants");

class ServerActions{ 

  receiveTequilaInfo(response) {
    AppDispatcher.handleServerAction({
      actionType: constants.GET_TEQUIINFO_RESPONSE,
      response: response
    });
  }
  receiveProviderInfo(response) {
    AppDispatcher.handleServerAction({
      actionType: constants.GET_PROVIDER_RESPONSE,
      response: response
    });
  }
  receiveUserHistory(response) {
    AppDispatcher.handleServerAction({
      actionType: constants.GET_USER_RESPONSE,
      response: response
    });
  }
}
export default new ServerActions();