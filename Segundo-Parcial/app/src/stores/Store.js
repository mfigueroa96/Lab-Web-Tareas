// Todo store
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
//import Constants from "../constants/Constants"
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/Constants';
import ObjectAssign from 'object-assign';
import EventEmitter from 'events';



var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _storeT = {
  list: [],
  editing: false
};

var _storeP = {
  list: [],
  editing: false
};

var _storeU = {
  list: [],
  editing: false
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

  switch(action.actionType) {

    case AppConstants.GET_TEQUIINFO_RESPONSE:
        console.log(action.response);
      // Construct the new todo string
      var newTodo = action.response;

      // Add the new todo to the list
      if(_storeT.list.length<1){
        _storeT.list.push(newTodo);
      }else{
        _storeT.list.pop();
        _storeT.list.push(newTodo);
      }
      TodoStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.GET_PROVIDER_RESPONSE:
      var newTodoP =  action.response;

      if(_storeP.list.length<1){
        _storeP.list.push(newTodoP);
      }else{
        _storeP.list.pop();
        _storeP.list.push(newTodoP);
      }
      TodoStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.GET_USER_RESPONSE:
      var newTodoU =  action.response;

      if(_storeP.list.length<1){
        _storeU.list.push(newTodoU);
      }else{
        _storeU.list.pop();
        _storeU.list.push(newTodoU);
      }
      TodoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default TodoStore;