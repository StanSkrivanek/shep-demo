const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * @param {string | number | Date} date
 */
function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getUTCDate(),
		year = d.getUTCFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	// @ts-ignore
	return [month, day, year].join('-');
}

/**
 * @param {string | number | Date} date
 */
function formatTime24(date) {
	var d = new Date(date),
		hours = '' + d.getHours(),
		minutes = '' + d.getMinutes();

	if (hours.length < 2) hours = '0' + hours;
	if (minutes.length < 2) minutes = '0' + minutes;

	return [hours, minutes].join(':');
}
// TODO: Refactor function below to fulfill ts requirements
/**
 * @param {string | number | Date} date
 */
function formatTime12(date) {
	var d = new Date(date),
		hours = d.getHours(),
		minutes = d.getMinutes();
	// Check whether AM or PM
	let newformat = hours >= 12 ? 'PM' : 'AM';
	// Find current hour in AM-PM Format
	hours = hours % 12;
	// To display "0" as "12"
	hours = hours ? hours : 12;
	// @ts-ignore
	// if (hours.toString().length < 2) hours = '0' + hours.toString();
	// @ts-ignore
	if (minutes.toString().length < 2) minutes = '0' + minutes.toString();

	return `${[hours, minutes].join(':')}${newformat}`;
}
/**
 * @param {string | number | Date} date
 */
function formatDateMonthName(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getUTCDate(),
		year = d.getUTCFullYear();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	// @ts-ignore
	const monthStr = months[parseInt(month)];
	return `${monthStr} ${day}, ${year}`;
}

export { formatDate, formatDateMonthName, formatTime12, formatTime24 };
