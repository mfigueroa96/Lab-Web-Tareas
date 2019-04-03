import Dispatcher from '../dispatchers';
import ActionTypes from '../constants';


class ProyectoActions{
		agregarElemento(item){
			Dispatcher.dispatch({
				actionType : ActionTypes.ADD_NEW_ITEM,
				payload : item
			});
		}

		remoto(){
    		Dispatcher.dispatch({
        		actionType: ActionTypes.INITIALISE,

       		 }
    	);
}

}

export default new ProyectoActions();