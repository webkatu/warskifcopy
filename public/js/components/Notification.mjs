import { notification } from '../stores/index.mjs';

const html = `
<p style="display: none;"></p>

<style>
p {
	position: fixed;
	width: 100%;
	margin: 0;
	top: 0;
	left: 0;
	text-align: center;
	border-bottom: 1px solid #ccc;
	background: #fff;
	color: #3a3;
}
</style>
`

export default class Notificaion extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;

		this.p = shadowRoot.querySelector('p');
		this.timerId = null;

		this.handleNotificationChange = this.handleNotificationChange.bind(this);
	}

	connectedCallback() {
		notification.addEventListener('CHANGE', this.handleNotificationChange);
		this.handleNotificationChange();
	}

	disconnectedCallback() {
		notification.removeEventListener('CHANGE', this.handleNotificationChange);
	}

	handleNotificationChange() {
		this.displayId = notification.displayId;
	}

	set displayId(val) {
		if(val === this._displayId) return;
		this._displayId = val;

		this.p.textContent = notification.text;
		this.p.style.display = '';
		window.clearTimeout(this.timerId);
		this.timerId = window.setTimeout(() => {
			this.p.style.display = 'none';
		}, notification.displayTime);
	}
}
