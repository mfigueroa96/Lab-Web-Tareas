import React from 'react';
import {TextField, Button} from '@material-ui/core';
var TodoActions = require('../actions/Action.js');

class EditTodo extends React.Component {

    state={
        text: ''
    };
  
    render(){
  
      return(
          <div>
        <TextField
              type="text"
              value={this.state.text}
              onChange={this._onChange}
              onKeyDown={this._catchEnter}
              placeholder="city"
              className="form-control"
              autoFocus={true}
            ></TextField>
            <Button className= "button" variant="outlined" onClick={this._search}>Busca</Button>
            </div>
      )
    }
  
    _onChange = (e) => {
      this.setState({ text:e.target.value});
    }

    _search = () =>{
        TodoActions.getWheather(this.state.text);
    }

    _catchEnter = (e) =>{
        if(e.keyCode === 13) {
            this._search();
        }
    }

  
  
  };

  export default (EditTodo);