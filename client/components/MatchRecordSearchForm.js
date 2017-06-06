import useState from 'usestate';
import actions from '../actions/actions.js';
import { matchRecordSearch } from '../stores/index.js';
import { browserHistory } from '../common/router.js'

const template = document.createElement('template');
template.innerHTML = `
<form>
	<input type="text" name="id" placeholder="IDを入力"/>
	<button type="submit">検索</button>
</form>
`;

@useState
export default class MatchRecordSearchForm extends HTMLElement {
	constructor() {
		super();

		this.handleMatchRecordSearchChange = this.handleMatchRecordSearchChange.bind(this);

		const content = template.content.cloneNode(true);

		const form = content.querySelector('form');
		this.searchIdInput = form.querySelector('input');
		this.submitButton = form.querySelector('button');

		this.appendChild(content);

		this.searchIdInput.addEventListener('change', () => {
			actions.inputSearchId(this.searchIdInput.value);
		});

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			browserHistory.pushState(`${location.pathname}?id=${matchRecordSearch.searchId}`);
		});
		
	}

	handleMatchRecordSearchChange() {
		this.setState(matchRecordSearch);
	}

	connectedCallback() {
		matchRecordSearch.on('CHANGE', this.handleMatchRecordSearchChange);
		this.handleMatchRecordSearchChange();
	}

	disconnectedCallback() {
		matchRecordSearch.removeListener('CHANGE', this.handleMatchRecordSearchChange);
	}

	stateChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'searchId':
				this.searchIdInput.value = newValue;
				return;

			case 'isFetching':
				if(newValue) this.submitButton.disabled = true;
				else this.submitButton.disabled = false;
				return;
		}
	}

	static get observedState() { return ['searchId', 'isFetching' ]; }
}

customElements.define('match-record-search-form', MatchRecordSearchForm);