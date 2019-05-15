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
    var query = `{
      tequila(key: ["${id}"]) {
        name
        alcohol_degrees
        purity
        date_of_release
        distillation
        year_of_distillation
        place_of_distillation
      }
    }`
    axios.get(`${constants.API_TEQUILA}?query=${query}`)
      .then(response => {
        console.log(response.data)
        /* if (response.data.my_tequila != null) {
            console.log(response.data.my_tequila);
            ServerActions.receiveTequilaInfo(response.data.my_tequila);
        }
        else {
          ServerActions.receiveTequilaInfo({"uuid": constants.NOT_ACCEPTED});
        } */
    });
  }

  getProviderInfo(id) {
    axios.get(`${constants.API}/provider/`+id)
      .then(response => {
        if (response.data.my_provider != null) {
            console.log(response.data);
            ServerActions.receiveProviderInfo(response.data.my_provider);
        }
        else {
          ServerActions.receiveProviderInfo({"uuid": constants.PROVIDER_NOT_FOUND});
        }
    });
  }

  getUserHistory(id, sort) {
    var query = `{
      user(key: ["${id}"]) {
        name
        lastName
        email
        tequilas
      }
    }`

    axios.get(`${constants.API_USER}?query=${query}`)
      .then(response => {
        response = response.data;
        if (response.data.user[0] != null) {
          var user = response.data.user[0];
          console.log('MY USER IS HERE', user)



          var query = `{
            tequila(key: ${user.tequilas.map(tequila => tequila.serial_num)}) {
              name
              distillation
              year_of_distillation
              alcohol_degrees
              purity
              date_of_release
              place_of_distillation
            }
          }`

          axios.get(`${constants.API_TEQUILA}?query=${query}`)
          .then(response => {
            user.tequilas = response.data.data;
            console.log('MY_RESPONSE_TEQUILAS', response.data);
            ServerActions.receiveUserHistory(user);
          })
        }
        else {
          ServerActions.receiveUserHistory({"user_exists": constants.USER_NOT_FOUND});
        }
    });
  }

  addTequilaToUser(useruid, tequikey) {

    axios.get(`${constants.API_USERTEQUILA}/${useruid}/${tequikey}`)
      .then(response => {
        response = response.data;
        console.log(response)
    });
  }
}

export default new API();