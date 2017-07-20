import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch(action.type) {
		case FETCH_WEATHER:
			action.payload.data.status = 200;
			return [action.payload.data, ...state];
		case 'ERROR':
			action.status = 404;
			return [action, ...state];
	}
	return state;
}