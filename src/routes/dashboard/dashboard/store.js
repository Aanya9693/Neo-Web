import { writable } from 'svelte/store';

// Create a writable store for selectedWallet
export const selectedWalletStore = writable('Wallet A');
