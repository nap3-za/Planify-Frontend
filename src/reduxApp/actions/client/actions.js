import axios from "axios";

import {
	LOAD_CLIENTS_LIST,
	LOAD_CLIENTS_DASHBOARD_DATA

} from "./types";

import {
	LOADING_ON,
	LOADING_OFF,
} from "../app/types";

import {
	RAISE_ERRORS,
} from "../messages/types";

import {
	EP_CLIENTS_VIEWSET,
	EP_CLIENTS_DASHBOARD,
} from "../../../AppEndpoints";

import { tokenConfigurator, serializeGetData } from "../../../Utilities";

import { raiseErrors, createMessage } from "../messages/actions";


export const createClient = (createFormData) => (dispatch, getState) => {

	axios.post(EP_CLIENTS_VIEWSET, createFormData, tokenConfigurator(getState))
		.then(response => {
			// call a method to update all events in store

			dispatch(createMessage("Client created"));
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
		})
}

export const updateClient = (updateFormData, eventID) => (dispatch, getState) => {

	const UPDATE_ENDPOINT = EP_CLIENTS_VIEWSET + eventID + "/";
	axios.patch(UPDATE_ENDPOINT, updateFormData, tokenConfigurator(getState))
		.then(response => {
			// call a method to update all events in store

			dispatch(createMessage("Client updated"));
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
		})
}

export const deleteClient = (eventID) => (dispatch, getState) => {
	axios.delete(EP_CLIENTS_VIEWSET + eventID + "/", tokenConfigurator(getState))
		.then(response => {
			dispatch(createMessage("Client deleted"));
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
		})
}


export const loadClientsDashboard = () => (dispatch, getState) => {
	axios.get(EP_CLIENTS_DASHBOARD, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_CLIENTS_DASHBOARD_DATA,
				payload: response.data
			})
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			dispatch(raiseErrors(error.response.data, error.response.status));
		})
}

export const listClients = (queries) => (dispatch, getState) => {
	const EP_CLIENTS = EP_CLIENTS_VIEWSET + "?" + serializeGetData(queries);

	axios.get(EP_CLIENTS, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_CLIENTS_LIST,
				payload: response.data
			})
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			dispatch(raiseErrors(error.response.data, error.response.status));
		})
}
