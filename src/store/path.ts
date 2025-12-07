import { writable, get } from "svelte/store";
import { hardRouter, type Route } from "../router/router";

export const currentPath = writable<Route>("/");

export function navigate(way: number): void;
export function navigate(path: Route): void;
export function navigate(arg0: Route | number) {
	if (typeof arg0 === "number") {
		window.history.go(arg0);
	} else {
		console.log(arg0);
		console.log(get(currentPath) !== arg0);
		if (get(currentPath) !== arg0) {
			window.history.pushState({}, "", arg0);
			currentPath.set(arg0);
		}
	}
}

export function setupListeners() {
	window.addEventListener("popstate", () => {
		if (hardRouter.hasOwnProperty(window.location.pathname))
			currentPath.set(window.location.pathname as Route);
		else
			currentPath.set("/");
	});
}
