import actions from '../actions/actions.mjs';
import { app } from '../stores/index.mjs';
import page from '../common/page.mjs';
import sendPageView from '../common/sendPageView.mjs';

const html = `
<app-header></app-header>
<div id="main"></div>
<app-footer></app-footer>

<style>
:host {
	display: block;
	width: 80%;
	margin: 0 auto;
}

@media screen and (max-width: 720px) {
	:host {
		width: 100%;
	}
}
</style>
`

export default class App extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'closed'});
		shadowRoot.innerHTML = html;

		const main = shadowRoot.querySelector('#main');
		const appIndex = document.createElement('app-index');

		page.base(app.deploy);

		page('*', (ctx, next) => {
			actions.locationChange(ctx);
			main.innerHTML = '';
			actions.initApp();
			next();
		});

		page('/', (ctx, next) => {
			const params = new URLSearchParams(ctx.querystring);
			const id = params.get('id');
			if(id === null) return main.append(appIndex);

			actions.inputSearchId(id);
			main.append(appIndex);

			sendPageView();
		});

		page.start({ click: false });
	}

	connectedCallback() {
		document.title = app.title;
	}
}
