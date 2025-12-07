import type { Component } from "svelte";
import Home from "../app/home/Home.svelte";
import Library from "../app/library/Library.svelte";

export const hardRouter = {
	"/": Home,
	"/library": Library
} as const satisfies Record<string, Component>;

export type Route = keyof typeof hardRouter;
