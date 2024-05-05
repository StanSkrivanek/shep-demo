<script>
	// @ts-nocheck

	export let msg = '';
</script>

<div class="toast">
   <div class="icon">Icon</div>
	<div class="toast__body">
		<p>
			{msg}
		</p>
	</div>
</div>

<style>
	.toast {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1.5rem;
      & p {
         margin: 0;
      }
	}
</style>
