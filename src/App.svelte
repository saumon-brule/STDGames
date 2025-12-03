<script lang="ts">
    import Link from "./lib/Link.svelte";
	import { currentPath, initRouter, navigate } from "./store/path";

	initRouter();
	$currentPath;
	$: test = $currentPath;
</script>

<main>
	<p>{$currentPath}</p>
	<form on:submit|preventDefault={() => navigate(test)}>
		<input type="text" bind:value={test} />
	</form>
	<Link to="/test">TEST</Link>
</main>
