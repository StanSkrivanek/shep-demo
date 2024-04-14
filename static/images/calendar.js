


const standard = document.querySelector(".standard");
const leap = document.querySelector(".leap");

// `year` and `firstdayInTheYear` will run every time that page is loaded
const year = new Date().getFullYear(); // get current year
let firstdayInTheYear = new Date(year, 0, 1); // get first day in year

// check if today is first day of year
firstdayInTheYear =
	new Date().toDateString() === firstdayInTheYear.toDateString();

function showStandard() {
	standard.style.display = "block";
	leap.style.display = "none";
}

function showLeap() {
	standard.style.display = "none";
	leap.style.display = "block";
}
// function to check leap year
function checkLeapYear(year) {
	// conditions to find out the leap year
	if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
		// if this is true (is leap calendar)

		// hide standard calendar and how leap year calendar
		showLeap();

		console.log(year + " is a leap year");
	} else {
		// if first calendar hidden hide leap calendar and show standard
		showStandard();

		console.log(year + " is not a leap year");
	}
}

// if today is first day of year run the function

if (firstdayInTheYear) {
// call function to check leap year
checkLeapYear(year);
}

// **NOTE**:
// Checking `firstdayInTheYear`  will be triggered **only** when page is will be visited!!!

// This mean if no one will visit website on January 1 calendar will not be swapped. in this case you can use **node-cron** to run this function automatically on January 1. As you can't install rpm packages on WF you can use link from eg. jsDelivr.

// https://www.jsdelivr.com/package/npm/node-cron

// and adjust code above with

