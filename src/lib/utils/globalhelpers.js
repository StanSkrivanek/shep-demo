
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