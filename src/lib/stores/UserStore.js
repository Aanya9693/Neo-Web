import { writable } from 'svelte/store';

export const userInfo = writable({
    email: "",
    accessToken: ""
});