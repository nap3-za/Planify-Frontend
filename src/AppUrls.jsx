
const URLS = {
	SIGN_IN: "sign-in",
	SIGN_UP: "sign-up",
	LOGOUT: "logout",

	RESET_PASSWORD: "password/reset",
	RESET_PASSWORD_DONE: "password/reset/done",
	RESET_PASSWORD_CONFIRM: "password/reset/confirm/:uid/:token",
	RESET_PASSWORD_CONFIRM_DONE: "password/reset/confirm/done",
	CHANGE_PASSWORD: "password/change",
	CHANGE_PASSWORD_DONE: "password/change/done",

	ACCOUNT: "account/:accountId",
	ACCOUNT_SETTINGS: "account/settings",

	Dashboard: "/",

	EVENTS_DASHBOARD: "events/",
	EVENTS_LIST: "events/list/",
	EVENT: "events/:id/",

	CLIENTS_DASHBOARD: "clients/",
	CLIENTS_LIST: "clients/list/",
	CLIENT: "clients/:id",
}


export const getUrl = (name, raw=false, trailing=true) => {


	if (raw) {
		return URLS[name];
	} else if (trailing) {
		return "/" + URLS[name];
	} else {
		return URLS[name] + "/";
	}
}