import { 
	LOAD_CLIENTS_LIST,
	LOAD_CLIENTS_DASHBOARD_DATA,

} from "../actions/client/types";

const initialState = {
	dashboard: {
		stats: null,

		clients: {
			all: null,
			type_1: {
				type: null,
				data: null,
				stats: null,
			},
			type_2: {
				type: null,
				data: null,
				stats: null,
			},
			type_3: {
				type: null,
				data: null,
				stats: null,
			},
		},

	},

	clients: null, // served on the list page
}

export default function(state = initialState, action) {
	switch(action.type) {

		case LOAD_CLIENTS_LIST:
			return {
				...state,
				clients: action.payload,
			};
		case LOAD_CLIENTS_DASHBOARD_DATA:
			return {
				...state,
				dashboard: action.payload,
			};


		default:
			return state;
	}
}
