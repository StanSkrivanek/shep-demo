<!-- <script>
   // get local storage
   const local = localStorage.getItem('courseData');


   // console.log("🚀 ~ file: +page.svelte:4 ~ local:", local)
   // parse local storage
   const data = local ? JSON.parse(local) : null;
   console.log("Parsed", data);
</script>

<h1>FORM</h1>
<pre>
    {JSON.stringify( data, null, 2)}
</pre>
{#if data.course}
<h1>{data.course.title}</h1>
{/if} -->
