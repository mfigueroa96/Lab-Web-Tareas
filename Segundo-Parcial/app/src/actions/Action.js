
// Todo actions
import constants from "../constants/Constants"
import API from "../utils/API"
var AppDispatcher = require('../dispatcher/AppDispatcher').default;
//var API = require('../utils/API');

class Action{

  getTequilaInfo = (tequilakey) => {
    AppDispatcher.handleViewAction({
      actionType: constants.TEQUILA_INFO,
      tequila: tequilakey
    });
    
    API.getTequilaInfo(tequilakey);
  }
  getProviderInfo(providerkey) {
    AppDispatcher.handleViewAction({
      actionType: constants.PROVIDER_INFO,
      tequila: providerkey
    });
    
    API.getProviderInfo(providerkey);
  }
  getUserHistory(userkey) {
    AppDispatcher.handleViewAction({
      actionType: constants.USER_HISTORY,
      tequila: userkey
    });
    
    API.getUserHistory(userkey);
  }

}

export default new Action();