<script lang="ts">
	import type { Component } from "svelte";
	import { currentPath } from "./../store/path";
	import { hardRouter, type Route } from "./router";

	let RouteComponent: Component;

	currentPath.subscribe((path) => {
		console.log(path);
		RouteComponent = hardRouter[path];
	});
</script>

<div>
	<RouteComponent />
</div>
