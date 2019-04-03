// Todo store
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
//import Constants from "../constants/Constants"
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/Constants';
import ObjectAssign from 'object-assign';
import EventEmitter from 'events';
import App from '../App';



var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _storeT = {
  tequila: {},
  exist: true
};

var _storeP = {
  provider: {},
  exist: true
};

var _storeU = {
  list: [],
  exist: true

};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
var TodoStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getListTequila: function() {
    return _storeT;
  },
  getListProvider: function() {
    return _storeP;
  },
  getListUser: function() {
    return _storeU;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload) {

  var action = payload.action;
  console.log(action)
  switch(action.actionType) {
    
    case AppConstants.GET_TEQUIINFO_RESPONSE:
    console.log(action.response);
      // Construct the new todo string
      var newTodo = action.response;

      _storeT.tequila = newTodo
      if(newTodo.uuid === AppConstants.NOT_ACCEPTED){
        _storeT.exist = false
      }else{
        _storeT.exist = true
      }
      TodoStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.GET_PROVIDER_RESPONSE:
      var newTodoP =  action.response;
      _storeP.provider = newTodoP
      console.log(newTodoP)
      if(newTodo.uuid != AppConstants.PROVIDER_NOT_FOUND){
        _storeP.exist = true
      }else{
        _storeP.exist = false
      }
     
      TodoStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.GET_USER_RESPONSE:
      var newTodoU =  action.response;
      console.log(newTodoU)
      if(newTodoU.length > 0){
        if(_storeU.list.length<1){
          _storeU.list.push(newTodoU);
        }else{
          _storeU.list.pop();
          _storeU.list.push(newTodoU);
        }
      }else{
        _storeU.list = {}
        _storeU.exist = false
      }
      TodoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default TodoStore;