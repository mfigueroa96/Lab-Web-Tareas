import React from 'react';
import './SimpleSelect.scss';

import PropTypes from 'prop-types';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class SimpleSelect extends React.Component {
  state = {
    country: '',
    labelWidth: 20,
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
        <FormControl variant="filled">
          <InputLabel className="simple-select-label" ref={ref => {
              this.InputLabelRef = ref;
            }} htmlFor="country-field">Pais</InputLabel>
          <Select
            className="simple-select"
            value={this.state.country}
            onChange={this.handleChange}
            input={<FilledInput labelWidth={this.state.labelWidth} name="country" id="country-field" />}
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

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleSelect);
