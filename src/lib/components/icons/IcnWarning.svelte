<script>
	export let width = 24,
		height = 24,
		currentColor = 'hsl(var(--hsl-info-light))';
</script>

<svg
	{width}
	{height}viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;">
    <path d="M12,22C17.523,22 22,17.523 22,12C22,6.477 17.523,2 12,2C6.477,2 2,6.477 2,12C2,17.523 6.477,22 12,22Z" style="fill:none;fill-rule:nonzero;stroke:{currentColor};stroke-width:1px;"/>
    <path d="M12,6L12,14" style="fill:none;fill-rule:nonzero;stroke:{currentColor};stroke-width:1px;"/>
    <path d="M11.99,18L12.01,18" style="fill:none;fill-rule:nonzero;stroke:{currentColor};stroke-width:1px;stroke-linejoin:miter;"/>
</svg>