<script>
	export let width = 24,
		height = 24,
		currentColor = 'hsl(var(--hsl-gray) / .75)';
</script>

<svg
	{width}
	{height}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	data-reactroot=""
>
	<path fill="none" d="M17 13H20L22 22H13.89H10.11H2L4 13H7"></path>
	<path
		stroke-linejoin="round"
		stroke-linecap="round"
		stroke-miterlimit="10"
		stroke-width="1"
		stroke={currentColor}
		d="M17 13H20L22 22H13.89H10.11H2L4 13H7"
	></path>
	<path
		stroke-linejoin="round"
		stroke-linecap="round"
		stroke-miterlimit="10"
		stroke-width="1"
		stroke={currentColor}
		fill="none"
		d="M11.9999 2C9.75995 2 7.81995 3.39 8.00995 5.73C8.20995 8.16 9.30995 10.64 10.3299 12.83C10.8299 13.91 11.3699 14.98 11.9999 15.99C12.6199 14.97 13.1699 13.91 13.6699 12.83C14.6899 10.64 15.7899 8.15 15.9899 5.73C16.1799 3.39 14.2399 2 11.9999 2Z"
	></path>
	<path
		stroke-linejoin="round"
		stroke-linecap="round"
		stroke-miterlimit="10"
		stroke-width="1"
		stroke={currentColor}
		fill="none"
		d="M12 6C12.2761 6 12.5 5.77614 12.5 5.5C12.5 5.22386 12.2761 5 12 5C11.7239 5 11.5 5.22386 11.5 5.5C11.5 5.77614 11.7239 6 12 6Z"
	></path>
</svg>
