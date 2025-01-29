import axios from "axios";

import {
	LOADING_ON,
	LOADING_OFF,
	LOAD_DASHBOARD_DATA,
} from "../app/types";
import { RESET_REDIRECT } from "./types";

import {
	RAISE_ERRORS,
} from "../messages/types";

import {
	EP_FIELD_CHOICES,
	EP_DASHBOARD_DATA,
} from "../../../AppEndpoints";

import { tokenConfigurator } from "../../../Utilities";

import { raiseErrors, createMessage } from "../messages/actions";



export const resetRedirect = () => (dispatch, getState) => {
	const redirect =  getState().app.redirect;
	dispatch({ type: RESET_REDIRECT })
	return redirect;
}

export const getFieldChoices = (populateFieldChoices, formID) => (dispatch, getState) => {
	const FIELD_CHOICES_EP = EP_FIELD_CHOICES + formID + "/";

	axios.get(FIELD_CHOICES_EP, tokenConfigurator(getState))
		.then(response => {
			populateFieldChoices(response.data);
		}).catch(error => {
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
			populateFieldChoices(null);
		})
}

export const getPaginatedObjects = (populate, currentPage) => (dispatch, getState) => {
	axios.get(currentPage, tokenConfigurator(getState))
		.then(response => {
			populate(response.data);
		}).catch(error => {
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
			populate(null);
		})
}

export const getObject = (populate, endpoint, objectID) => (dispatch, getState) => {
	axios.get(endpoint + objectID + "/", tokenConfigurator(getState))
		.then(response => {
			populate(response.data);
		}).catch(error => {
			if (error.response) {
				dispatch(raiseErrors(error.response.data, error.response.status));
			}
			populate(null);
		})
}

export const loadDashboard = () => (dispatch, getState) => {
	axios.get(EP_DASHBOARD_DATA, tokenConfigurator(getState))
		.then(response => {
			dispatch({
				type: LOAD_DASHBOARD_DATA,
				payload: response.data
			})
			dispatch({type: LOADING_OFF});
		}).catch(error => {
			dispatch({type: LOADING_OFF});
			dispatch(raiseErrors(error.response.data, error.response.status));
		})
}
