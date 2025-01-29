import { 
	LOAD_EVENTS_LIST,
	LOAD_EVENTS_DASHBOARD_DATA,

} from "../actions/event/types";

const initialState = {
	dashboard: {
		stats: null,

		events: {
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

	events: null, // served on the list page
}

export default function(state = initialState, action) {
	switch(action.type) {

		case LOAD_EVENTS_LIST:
			return {
				...state,
				events: action.payload,
			};
		case LOAD_EVENTS_DASHBOARD_DATA:
			return {
				...state,
				dashboard: action.payload,
			};


		default:
			return state;
	}
}
