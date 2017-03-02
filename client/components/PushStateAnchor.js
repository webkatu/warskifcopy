import { browserHistory } from '../common/router.js';

class PushStateAnchor extends HTMLAnchorElement {
	constructor() {
		super();

		this.addEventListener('click', (e) => {
			e.preventDefault();
			browserHistory.pushState(this.href);
		});
	}
}