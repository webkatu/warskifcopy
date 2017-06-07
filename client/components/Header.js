import config from '../config.js';
import { browserHistory } from '../common/router.js';
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
		
		const a = content.querySelector('a')
		a.href = config.deploy;
		a.onclick = (e) => {
			e.preventDefault();
			browserHistory.pushState(e.currentTarget.href + '/');
		}

		this.appendChild(content);
	}
}

customElements.define('x-header', Header);
