import useState from 'usestate';
import { notification } from '../stores/index.js';

const template = document.createElement('template');
template.innerHTML = `
<p style="display: none;"></p>
`

@useState
export default class Notificaion extends HTMLElement {
	constructor() {
		super();

		this.handleNotificationChange = this.handleNotificationChange.bind(this);
		this.timerId = null;

		const content = template.content.cloneNode(true);
		this.p = content.querySelector('p');

		this.appendChild(content);
	}

	handleNotificationChange(e) {
		this.setState(notification);
	}

	connectedCallback() {
		notification.on('CHANGE', this.handleNotificationChange);
		this.handleNotificationChange();
	}

	disconnectedCallback() {
		notification.removeListener('CHANGE', this.handleNotificationChange);
	}

	stateChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'displayId':
				this.p.textContent = notification.text;
				this.p.style.display = '';
				window.clearTimeout(this.timerId);
				this.timerId = window.setTimeout(() => {
					this.p.style.display = 'none';
				}, notification.displayTime);
				return;
		}
	}

	static get observedState() { return ['displayId']; }
}

customElements.define('x-notification', Notificaion);