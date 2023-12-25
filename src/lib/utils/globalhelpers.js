/**
 * @param {string} text
 * @param {number} length
 */
function trimText(text, length) {
	if (text.length > length) {
		return text.slice(0, length) + '...';
	} else {
		return text;
	}
}

export { trimText };

// source (how did you hear about this course)
export const source = [
	'-- select source --',
	'Therapist',
	'Counsellor',
	'Local Newspaper',
	'SHEP Website',
	'Community Centre',
	'Previous Participant',
	'Social Media',
	'Other'
];
// irish counties
export const counties = [
	'-- select county --',
	'Antrim',
	'Armagh',
	'Carlow',
	'Cavan',
	'Clare',
	'Cork',
	'Derry',
	'Donegal',
	'Down',
	'Dublin',
	'Fermanagh',
	'Galway',
	'Kerry',
	'Kildare',
	'Kilkenny',
	'Laois',
	'Leitrim',
	'Limerick',
	'Longford',
	'Louth',
	'Mayo',
	'Meath',
	'Monaghan',
	'Offaly',
	'Roscommon',
	'Sligo',
	'Tipperary',
	'Tyrone',
	'Waterford',
	'Westmeath',
	'Wexford',
	'Wicklow'
];
