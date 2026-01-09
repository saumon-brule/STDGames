<script lang="ts">
	import NavHeader from "./app/NavHeader/NavHeader.svelte";
	import Router from "./router/Router.svelte";
	import { setupListeners } from "./store/path";

	setupListeners();
</script>

<NavHeader />
<Router />
