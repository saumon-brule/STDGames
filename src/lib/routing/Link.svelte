<script lang="ts">
	import type { Route } from "../../router/router";
	import { navigate } from "../../store/path";

	export let to: Route
	export let replace: boolean = false

	function onClick(e: MouseEvent)
	{
		if (e.defaultPrevented)
			return
		if (e.button !== 0)
			return
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
			return

		e.preventDefault()
		navigate(to, replace);
	}
</script>

<a
	href={to}
	on:click={onClick}
	{...$$props}
	class={$$props.class ?? ''}
>
	<slot />
</a>
