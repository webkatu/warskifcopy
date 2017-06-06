import config from '../config.js';
import Notification from './Notification';

const template = document.createElement('template');
template.innerHTML = `
<header>
	<h1><a href="">将棋ウォーズ棋譜コピー</a></h1>
</header>
`;

export default class Header extends HTMLElement {
	constructor() {
		super();
		const content = template.content.cloneNode(true);
		content.appendChild(new Notification());
		content.querySelector('a').href = config.deploy;

		this.appendChild(content);
	}
}

customElements.define('x-header', Header);
