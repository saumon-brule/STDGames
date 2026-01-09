<script lang="ts">
	import { currentPath } from "./../store/path";
	import { hardRouter, type RouterValue } from "./router";

	let routed: RouterValue;

	$: routed = hardRouter[$currentPath];
</script>

<div>
	<svelte:component this={routed.component} {...routed.props}/>
</div>
