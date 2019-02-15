import React from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
        <FormControl variant="outlined">
          <InputLabel ref={ref => {
              this.InputLabelRef = ref;
            }} htmlFor="country-field">Pais</InputLabel>
          <Select
            value={this.state.country}
            onChange={this.handleChange}
            input={<OutlinedInput labelWidth={this.state.labelWidth} name="country" id="country-field" />}
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
