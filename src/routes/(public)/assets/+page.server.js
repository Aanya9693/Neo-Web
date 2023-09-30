import { plugins } from '$lib/technology/plugins';
import { traits } from '$lib/technology/traits';
import { technical } from '$lib/technology/technicals';
import { stack } from '$lib/technology/neucronStack';
export const load = async () => {
	// console.log(plugins)
	return {
		plugins,
		traits,
		technical,
		stack
	};
};
