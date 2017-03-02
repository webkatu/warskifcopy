import { browserHistory } from '../common/router.js'

const template = document.createElement('template');
template.innerHTML = `
<form>
	<input type="text" name="id" placeholder="IDを入力"/>
	<button type="submit">検索</button>
</form>
`

export default class MatchRecordSearchForm extends HTMLElement {
	constructor() {
		super();

		const content = this.constructor.template.content.cloneNode(true);
		const form = content.querySelector('form');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const input = form.querySelector('input[name="id"]');
			browserHistory.pushState(location.pathname + '?id=' + input.value);
		});

		this.appendChild(content);
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if(attr === 'id-value') {
			const input = this.querySelector('input[name="id"]');
			input.value = newValue;
		}
	}

	static get observedAttributes() { return ['id-value']; }

	static template = template;
}

customElements.define('match-record-search-form', MatchRecordSearchForm);