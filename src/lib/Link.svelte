<script lang="ts">
	import { navigate } from "../store/path";
	export let to: string;
</script>

<a href={to} on:click|preventDefault={() => navigate(to)}>
	<slot></slot>
</a>
