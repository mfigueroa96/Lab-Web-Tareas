// Random User API logic
//import constants from "../constants/Constants"
import axios from 'axios';
import constants from "../constants/Constants"
import ServerActions from "../actions/ServerActions"
//var axios = require("axios");
//var ServerActions = require('../actions/ServerActions');
//var constants = require("../constants/Constants");

class API {

  getTequilaInfo = (id) => {
    axios.get(constants.API+"/tequila/"+id)
      .then(response => {
        if (response.data.my_tequila != null) {
            console.log(response.data.my_tequila);
            ServerActions.receiveTequilaInfo(response.data.my_tequila);
        }
        else {
          ServerActions.receiveTequilaInfo({"uuid": constants.NOT_ACCEPTED});
        }
    });
  }

  getProviderInfo(id) {
    axios.get(`${constants.API}/provider/`+id)
      .then(response => {
        if (response.data != null) {
            console.log(response.data);
            ServerActions.receiveProviderInfo(response.data.my_provider);
        }
        else {
          ServerActions.receiveProviderInfo({"provider_exists": "false"});
        }
    });
  }

  getUserHistory(id, sort) {
    axios.get("${constants.API}/user/"+id+"?sort="+sort)
      .then(response => {
        if (response.data != null) {
            console.log(response.data);
            ServerActions.receiveUserHistory(response.data.history);
        }
        else {
          ServerActions.receiveUserHistory({"provider_exists": "false"});
        }
    });
  }
}

export default new API();