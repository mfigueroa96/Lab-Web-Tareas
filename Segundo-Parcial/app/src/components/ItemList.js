/*import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ProyectoStore from '../stores/ProyectoStore';




const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

class ItemsList extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			items: ProyectoStore.getTodosElementos()
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ items: ProyectoStore.getTodosElementos() });
	}

	componentWillMount() {
		ProyectoStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ProyectoStore.removeChangeListener(this._onChange);
	}

	render() {

		let noItemsMessage;

		// Show a friendly message instead if there are no items.
		if (!this.state.items.length) {
			noItemsMessage = (<li className="no-items">la lista esta vacía</li>);
		}

		return (
			<Paper className={this.props.root}>
				<Table className={this.props.table}>
					<TableHead>
						<TableRow>
							<TableCell align="right">id</TableCell>
							<TableCell align="right">Matricula</TableCell>
							<TableCell align="right">Nombre</TableCell>
							<TableCell align="right">Apellido  </TableCell>
							<TableCell align="right">Calificacion </TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.items.map(row => (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell align="right">{row.matricula}</TableCell>
								<TableCell align="right">{row.nombre}</TableCell>
								<TableCell align="right">{row.apellido}</TableCell>
								<TableCell align="right">{row.calificacion}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>

		);
	}
}

ItemsList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (ItemsList);*/
