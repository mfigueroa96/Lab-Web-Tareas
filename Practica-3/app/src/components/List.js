import React from 'react';


class TodoList extends React.Component{

    render() {
  
      var rows = [];
      var data = Array.from(this.props.list.list);
      if(this.props.list) {
        data.forEach(item => {
          var forecast = Array.from(item.forecast.forecastday);
          forecast.forEach(element => {
            rows.push(<div>{element.date} {element.day.condition.text}</div>);
          });
        });
      }
  
  
      return(
        <div className="table-responsive">
            {rows}
        </div>
      )
    }

  };

  export default TodoList