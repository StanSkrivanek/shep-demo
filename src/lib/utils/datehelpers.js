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
function formatTime(date) {
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

export { formatDate, formatDateMonthName, formatTime };
