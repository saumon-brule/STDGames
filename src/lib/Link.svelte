<script lang="ts">
    import type { Route } from "../router/router";
	import { navigate } from "../store/path";
	export let to: Route;
</script>

<a href={to} on:click|preventDefault={() => {console.log(to);navigate(to)}}>
	<slot></slot>
</a>
