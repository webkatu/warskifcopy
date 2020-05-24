import { app } from '../stores/index.mjs';

const html = `
<header>
	<h1><a is="spa-anchor" href="${app.deploy}/">${app.title}</a></h1>
	<x-notification></x-notification>
</header>

<style>
h1 {
	text-align: center;
}

h1 a {
	color: var(--base-text-color);
	text-decoration: none;
}

h1 a:hover {
	transition: var(--a-hover-transition);
	text-shadow: var(--a-hover-text-shadow);
}
</style>
`;

export default class AppHeader extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;
	}
}