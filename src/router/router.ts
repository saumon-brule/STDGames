import type { Component, ComponentProps } from "svelte";
import Home from "../app/home/Home.svelte";
import Library from "../app/library/Library.svelte";
import Navigate from "../lib/routing/Navigate.svelte";
import Settings from "../app/settings/Settings.svelte";

export type RouterValue<T extends Component<any> = Component<any>> = {
	component: T,
	props?: ComponentProps<T>
};

/**
 * @description This function ensure the props you give is coherent
 * with the props asked by the component. Not using this function will
 * validate any RouterValue with any props which may be dangerous.
 */
function defineRoute<T extends Component<any>>(value: RouterValue<T>): RouterValue<T> {
	return value;
}

export const hardRouter = {
	"/": defineRoute({
		component: Navigate,
		props: {
			to: "/home",
		}
	}),
	"/home": defineRoute({
		component: Home,
	}),
	"/library": defineRoute({
		component: Library
	}),
	"/settings": defineRoute({
		component: Settings
	})
} as const satisfies Record<string, RouterValue>;

export function isValidRoute(path: string): path is Route {
	return path in hardRouter;
}

export type Route = keyof typeof hardRouter;
