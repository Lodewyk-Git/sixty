import { writable } from "svelte/store";

export const user = writable({});
export const jumped = writable(false);
export const readerData = writable({ results: [] });



