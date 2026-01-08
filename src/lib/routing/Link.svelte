<script lang="ts">
	import type { Route } from "../../router/router";
	import { navigate } from "../../store/path";
	export let to: Route;
</script>

<a
	href={to}
	on:click|preventDefault={() => {
		navigate(to);
	}}
>
	<slot />
</a>
