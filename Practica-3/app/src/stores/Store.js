// Todo store
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/Constants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _store = {
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

  getList: function() {
    return _store;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.actionType) {

    case AppConstants.GET_WHEATHER_RESPONSE:
        console.log(action.response);
      // Construct the new todo string
      var newTodo = action.response;

      // Add the new todo to the list
      if(_store.list.length<1){
        _store.list.push(newTodo);
      }else{
        _store.list.pop();
        _store.list.push(newTodo);
      }
      TodoStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = TodoStore;