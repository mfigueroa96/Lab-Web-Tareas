import React from 'react';
import './SimpleSelect.scss';

import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class SimpleSelect extends React.Component {
  state = {
    country: ''
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
        <FormControl variant="filled">
          <InputLabel className="simple-select-label" htmlFor="country-field">Pais</InputLabel>
          <Select
            className="simple-select"
            value={this.state.country}
            onChange={this.handleChange}
            input={<FilledInput name="country" id="country-field" />}
          >
            <MenuItem value={"argentina"}>Argentina</MenuItem>
            <MenuItem value={"chile"}>Chile</MenuItem>
            <MenuItem value={"colombia"}>Colombia</MenuItem>
            <MenuItem value={"ecuador"}>Ecuador</MenuItem>
            <MenuItem value={"mexico"}>México</MenuItem>
            <MenuItem value={"peru"}>Perú</MenuItem>
          </Select>
        </FormControl>
    );
  }
}


export default (SimpleSelect);
