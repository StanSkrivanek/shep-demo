const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * @param {string | number | Date} date
 */
function formatDate(date) {
	var d = new Date(date),
		month = '' + d.getMonth(),
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
function monthNameDateYear(date) {
	var d = new Date(date),
		month = '' + d.getMonth(),
		day = '' + d.getUTCDate(),
		year = d.getUTCFullYear();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	// @ts-ignore
	const monthStr = months[parseInt(month)];
	return `${monthStr} ${day}, ${year}`;
}
/**
 * @param {string | number | Date} date
 */
function monthNameDate(date) {
	var d = new Date(date),
		month = '' + d.getMonth(),
		day = '' + d.getUTCDate();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	// @ts-ignore
	const monthStr = months[parseInt(month)];
	return `${monthStr} ${day}`;
}
/**
 * @param {string | number | Date} date
 */
function monthYear(date) {
	var d = new Date(date),
		month = '' + d.getMonth(),
		year = d.getUTCFullYear();
	if (month.length < 2) month = '0' + month;
	// @ts-ignore
	const monthStr = months[parseInt(month)];
	return `${monthStr} ${year}`;
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

/**
 * @param {string | number | Date} date
 */
function formatTime12(date) {
	var d = new Date(date),
		hours = d.getHours(),
		minutes = d.getMinutes();
	// Check whether AM or PM
	let am_pm = hours >= 12 ? 'PM' : 'AM';
	// Find current hour in AM-PM Format
	hours = hours % 12;
	// To display "0" as "12"
	hours = hours ? hours : 12;
	// @ts-ignore
	// if (hours.toString().length < 2) hours = '0' + hours.toString();
	// @ts-ignore
	if (minutes.toString().length < 2) minutes = '0' + minutes.toString();

	return `${[hours, minutes].join(':')}${am_pm}`;
}

export { formatDate, monthNameDateYear, formatTime12, formatTime24, monthNameDate, monthYear};
