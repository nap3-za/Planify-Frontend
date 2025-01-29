import axios from "axios";

import {
	LOAD_EVENTS_LIST,
	LOAD_EVENTS_DASHBOARD_DATA

} from "./types";

import {
	LOADING_ON,
	LOADING_OFF,
} from "../app/types";

import {
	RAISE_ERRORS,
} from "../messages/types";

import {
	EP_EVENTS_VIEWSET,
	EP_EVENTS_DASHBOARD,
} from "../../../AppEndpoints";

import { tokenConfigurator, serializeGetData } from "../../../Utilities";

import { raiseErrors, createMessage } from "../messages/actions";


export const createEvent = (createFormData) => (dispatch, getState) => {

	axios.post(EP_EVENTS_VIEWSET, createFormData, tokenConfigurator(getState))
		.then(response => {
			// call a method to update all events in store

			dispatch(createMessage("Event created"));
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
		})
}

export const updateEvent = (updateFormData, eventID) => (dispatch, getState) => {

	const UPDATE_ENDPOINT = EP_EVENTS_VIEWSET + eventID + "/";
	axios.patch(UPDATE_ENDPOINT, updateFormData, tokenConfigurator(getState))
		.then(response => {
			// call a method to update all events in store

			dispatch(createMessage("Event updated"));
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
		})
}

export const deleteEvent = (eventID) => (dispatch, getState) => {
	axios.delete(EP_EVENTS_VIEWSET + eventID + "/", tokenConfigurator(getState))
		.then(response => {
			dispatch(createMessage("Event deleted"));
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
		})
}


export const loadEventsDashboard = () => (dispatch, getState) => {
	axios.get(EP_EVENTS_DASHBOARD, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_EVENTS_DASHBOARD_DATA,
				payload: response.data
			})
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			dispatch(raiseErrors(error.response.data, error.response.status));
		})
}

export const listEvents = (queries) => (dispatch, getState) => {
	const EP_EVENTS = EP_EVENTS_VIEWSET + "?" + serializeGetData(queries);

	axios.get(EP_EVENTS, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_EVENTS_LIST,
				payload: response.data
			})
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			dispatch(raiseErrors(error.response.data, error.response.status));
		})
}
