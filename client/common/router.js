export const browserHistory = {
	pushState(path) {
		const event = new CustomEvent('pathchange', {
			detail: {
				method: 'pushState',
				path,
			},
		});
		window.dispatchEvent(event);
	},
	replaceState(path) {
		const event = new CustomEvent('pathchange', {
			detail: {
				method: 'replaceState',
				path,
			},
		});
		window.dispatchEvent(event);
	},
}
