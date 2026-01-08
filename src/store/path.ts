import { writable, get } from "svelte/store";
import { hardRouter, isValidRoute, type Route } from "../router/router";

export const currentPath = writable<Route>("/");

/**
 * @param way Allows to navigate in a certain direction, meaning going back and forth
 */
export function navigate(way: number): void;
export function navigate(path: string): void;
export function navigate(arg0: string | number) {
	if (typeof arg0 === "number") {
		const way = arg0;
		window.history.go(way);
		return;
	}
	const route = arg0;
	if (isValidRoute(route)) {
		if (get(currentPath) !== route) {
			window.history.pushState({}, "", route);
			currentPath.set(route);
		}
	} else {
		open(route);
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
