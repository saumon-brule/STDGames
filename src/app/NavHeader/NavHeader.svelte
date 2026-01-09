<script lang="ts">
	import Link from "../../lib/routing/Link.svelte";
</script>

<div id="nav-header">
	<Link to="/home" class="nav-link">home</Link>
	<Link to="/library" class="nav-link">library</Link>
	<Link to="/settings" class="nav-link">settings</Link>
</div>

<style>
	#nav-header {
		
	}

	:global(.nav-link) {
		color: red;
	}
</style>
