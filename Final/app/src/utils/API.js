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
        uuid
        provider
        provider_uuid
      }
    }`
    axios.get(`${constants.API_TEQUILA}?query=${query}`)
      .then(response => {
        if (response.data.data.tequila[0].name != "0") {
            ServerActions.receiveTequilaInfo(response.data.data.tequila[0]);
        }
        else {
          ServerActions.receiveTequilaInfo({"uuid": constants.NOT_ACCEPTED});
        } 
    });
  }

  getProviderInfo(id) {
    var query = `{
      get_info(key: ${JSON.stringify(id)}) {
        brand
        contact_mail
        contact_phone
        tequilas
        uuid
      }
    }`


    axios.get(`${constants.API_PROVIDER}?query=${query}`)
      .then(response => {
        if (response.data.data.get_info != null) {
          var provider = response.data.data.get_info;

          query = `{
            from_provider(key: ${JSON.stringify(provider.tequilas)}) {
              name
              distillation
              year_of_distillation
              alcohol_degrees
              purity
              date_of_release
              place_of_distillation
              uuid
            }
          }`

          axios.get(`${constants.API_TEQUILA}?query=${query}`)
          .then(response => {
            provider.tequilas = response.data.data.from_provider;
            ServerActions.receiveProviderInfo(provider);
          })
        }
        else {
          ServerActions.receiveProviderInfo({"uuid": constants.PROVIDER_NOT_FOUND});
        }
    });
  }

  getUserHistory(id, sort) {
    var query = `{
      user(key: "${id}") {
        name
        lastName
        email
        tequilas {
          serial_num
          date_of_purchase
        }
      }
    }`

    axios.get(`${constants.API_USER}?query=${query}`)
      .then(response => {
        response = response.data;
        if (response.data.user[0] != null) {
          var user = response.data.user[0];
          console.log('MY USER IS HERE', user)

          var query = `{
            from_user(key: ${JSON.stringify(user.tequilas.map(tequila => tequila.serial_num))}, order: ${+sort}) {
              name
              distillation
              year_of_distillation
              alcohol_degrees
              purity
              date_of_release
              place_of_distillation
              uuid
              url
            }
          }`

          axios.get(`${constants.API_TEQUILA}?query=${query}`)
          .then(response => {
            user.history = response.data.data.from_user;
            ServerActions.receiveUserHistory(user);
          })
        }
        else {
          ServerActions.receiveUserHistory({"user_exists": constants.USER_NOT_FOUND});
        }
    });
  }

  addTequilaToUser(useruid, tequikey) {
    var query = `{
      addTequila(uid: "${useruid}", key: "${tequikey}")
    }`
    axios.get(`${constants.API_USER}/api?query=${query}`)
      .then(response => {
        response = response.data;
        if(response.data.addTequila){
          ServerActions.addTequilaToUser({"added":true})
        }else{
          ServerActions.addTequilaToUser({"added":false})
        }
    });
  }
}

export default new API();