const template = document.createElement('template');
template.innerHTML = `
<p style="display: none;"></p>
`

export default class Notificaion extends HTMLElement {
	constructor() {
		super();
		const content = this.constructor.template.content.cloneNode(true);
		this.p = content.querySelector('p');

		this.appendChild(content);
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		switch(attr) {
			case 'text':
				this.firstElementChild.textContent = newValue;
				break;

			case 'display-time':
				let time = Number(newValue);
				if(Number.isNaN(time) || time === 0) return;

				this.p.style.display = '';
				setTimeout(() => {
					this.p.style.display = 'none';
					this.setAttribute('display-time', '');
				}, time);
				break;
		}
	}

	static get observedAttributes() { return ['text', 'display-time']; }

	static template = template;
}

customElements.define('x-notification', Notificaion);