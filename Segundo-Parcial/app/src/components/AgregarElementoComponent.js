import React from 'react';
import ProyectoActions from '../actions/ProyectoActions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ProyectoStore from '../stores/ProyectoStore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AgregarElementoComponent extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			item: this.obtenerElementoVacio()//elemento capturado
		};
		this._remoto.bind(this);
	}

	obtenerElementoVacio(){
		return{
			descripcion : '',
			precio: 0
		};
	}

	_actualizarEstado(event){
		let campo = event.target.name;
		let valor = event.target.value;
		if (valor && campo =='precio' && !valor.match(/^[a-z0-9.\+\-]+$/g)){
			return 
		} 
		this.state.item[campo]=valor;
		this.setState({item: this.state.item});
	
	}




	_addNewItem(event) {

		event.preventDefault();
		this.state.item.matricula = this.state.item.matricula || '-';
		this.state.item.apellido = this.state.item.apellido || '-';
		this.state.item.nombre = this.state.item.nombre || '-';
		this.state.item.calificacion = this.state.item.calificacion || 0;
		ProyectoActions.agregarElemento(this.state.item);
		console.log(this.state.item);
		this.setState({ item : this.obtenerElementoVacio() });
	}


	_remoto(event) {
		
			ProyectoActions.remoto();

			
	}

render() {
		const { classes } = this.props;

		return (
			<React.Fragment>
					<Typography variant="h6" gutterBottom>
						Calificaciones: promedio de grupo {ProyectoStore.getPromedio()}
					</Typography>

					<form id="myform" className="form-inline add-item" >
						<Grid container spacing={24}>
							<Grid item xs={12} sm={6}>
								<TextField id="matricula" label="Matricula"   margin="normal" name="matricula" onChange={this._actualizarEstado.bind(this)} fullWidth value={this.state.value}/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField id="nombre" label="Nombre"   margin="normal" name="nombre" onChange={this._actualizarEstado.bind(this)} value={this.state.value} fullWidth/><br/>
							</Grid>
							<Grid item xs={12} sm={6}>
								 <TextField id="apellido" label="Apellido"   margin="normal" name="apellido" onChange={this._actualizarEstado.bind(this)} fullWidth value={this.state.value}/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField id="calificacion" label="Calificacion"   margin="normal" name="calificacion" onChange={this._actualizarEstado.bind(this)} fullWidth value={this.state.value}/>
							</Grid>
						</Grid>
								 <Button variant="contained" component="span" className={classes.button} onClick={this._addNewItem.bind(this)}>
				          Registrar
				        </Button>
				         <Button variant="contained" component="span" className={classes.button} onClick={this._remoto.bind(this)}>
				         	Remoto
				         </Button>
					</form>

			</React.Fragment>

		)
	}
}

AgregarElementoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AgregarElementoComponent);

	


