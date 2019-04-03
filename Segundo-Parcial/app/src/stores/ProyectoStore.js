//ProyectoStore
import { EventEmitter } from 'events';
import  Dispatcher from '../dispatchers';
import {obtener} from '../utils';
let listado = [];

class ProyectoStore extends EventEmitter{
			constructor(){
				super();
				Dispatcher.register(this._registerToActions.bind(this));// metodos
			}

			_registerToActions(action){
				switch(action.actionType){
					case 'ADD_NEW_ITEM':
						//llamar a funcion agregar elementos
						this.agregarElemento(action.payload);
						break;
					case 'INITIALISE':
						 this.llamarRemote();

						break;

				} 
			}



			async llamarRemote(){
				 await obtener(Math.round(Math.random() * 10+1)).then(x=>{
					  console.log(x);
				  });



			}
			


			agregarElemento(item){
				item.id = listado.length;
				listado.push(item);
				this.emit("CAMBIO");
			}

			getTodosElementos(){
				return listado;
			}

			addChangeListener(callback){
				this.on("CAMBIO",callback);
			}

			removeChangeListener(callback){
				this.removeListener("CAMBIO", callback);
			}


			getPromedio() {
				let totalBudget = 0;
				listado.forEach((item) => {
					totalBudget += parseFloat(item.calificacion);
				});
				var promedio = totalBudget/listado.size
				return isNaN(promedio)? '  - ': promedio;
			}
}

export default new ProyectoStore();





