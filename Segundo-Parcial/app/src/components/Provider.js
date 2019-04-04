import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoStore from "../stores/Store";
import TodoActions from "../actions/Action";
import '../styles/Provider.scss';
import { Grid } from '@material-ui/core';
import SectionHeader from './SectionHeader';
import ResultProviderTequila from "../components/ResultProviderTequila"
export default class Provider extends Component {
    state = {
        listProvider: TodoStore.getListProvider(),
    }

    getInitialState =() => {
        this.setState({listTequila: TodoActions.getProviderInfo(this.props.match.params.providerKey) });
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.getProviderInfo(this.props.match.params.providerKey);
    }

    _onChange = () => {
        this.setState({listProvider: TodoStore.getListProvider()});
        console.log(this.state)
    }


    render() {
        var rows = [];
        var data = this.state.listProvider.provider
        var data2 = data.tequilas
        var img = data.uuid!==undefined ? data.uuid.split('-').join(''): ""

        if(data2 != undefined && data2.length > 0){
            data2.forEach((item, i) => {
                console.log(item)
            rows.push(<ResultProviderTequila key={i} element={item}></ResultProviderTequila>);
            });
        console.log("Esto es rows:")
        console.log(data2);
        }
        return (
          <div className='provider-section'>
            <SectionHeader />
            <Grid container className='provider-info'>
              <Grid item xl ={6} lg={6} md={6} sm={12}>
              <div className= 'provider-container'>
                <h1>Tequila {data.brand}</h1>
                <p>Correo Electronico:{data.contact_mail}</p>
                <p>Teléfono {data.contact_phone}</p>
                <div className='provider-tequila-list'>
                <h3>Listado de Tequilas:</h3>
                  {rows}
                </div>
              </div>

            </Grid>
            <Grid item xl ={6} lg={6} md={6} sm={12}>
              <div className='tequila-img-container'>
                  <img className='tequila-img' src={`/assets/provider/${img}.png`} />
              </div>
            </Grid>
          </Grid>
        </div>
        )
    }
}
