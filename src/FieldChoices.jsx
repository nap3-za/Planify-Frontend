
export const GENDERS = {
	MLE: "Male",
	FML: "Female",
	NBN: "Non-binary",
}


export function getOptions(field_name, field_choices_raw) {
	let options = []
	options.push(<option value="">{field_name}</option>)

	for (const [key, value] of Object.entries(field_choices_raw)) {
		options.push(<option value={key}>{value}</option>)
	}

	return options;
}


// - - - -
// Form identifiers when fetching field choices from the backend

export const FC_CREATE_UPDATE_EVENT = "CUE";