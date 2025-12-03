import { writable } from "svelte/store";

export const currentPath = writable("/");

export function navigate(way: number): void;
export function navigate(path: string): void;
export function navigate(arg0: string | number) {
	if (typeof arg0 === "number") {
		window.history.go(arg0);
	} else {
		if (window.location.pathname !== arg0) {
			window.history.pushState({}, "", arg0);
			currentPath.set(arg0);
		}
	}
}

export function initRouter() {
	window.addEventListener("popstate", () => {
		currentPath.set(window.location.pathname);
	});
}
