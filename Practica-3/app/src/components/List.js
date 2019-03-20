import React from 'react';
import Result from './Result';
import Grid from '@material-ui/core/Grid';
import './List.scss'

class TodoList extends React.Component{

    render() {
  
      var rows = [];
      var data = Array.from(this.props.list.list);
      if(this.props.list) {
        data.forEach(item => {
          var forecast = Array.from(item.forecast.forecastday);
          forecast.forEach((element, i) => {
            rows.push(<Result key={i} element={element} />);
          });
        });
      }
      
      return(
        <div className="table-responsive">
            <Grid container align="stretch" direction="row">
            <Grid item lg={1}></Grid>
              {rows}
            <Grid item lg={1}></Grid>
            </Grid>
        </div>
      )
    }

  };

  export default TodoList