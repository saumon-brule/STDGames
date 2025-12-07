<script lang="ts">
    import Router from "./router/Router.svelte";
	import { currentPath, navigate, setupListeners } from "./store/path";

	setupListeners();
	$currentPath;
	$: test = $currentPath;
</script>

<main>
	<Router/>
</main>
