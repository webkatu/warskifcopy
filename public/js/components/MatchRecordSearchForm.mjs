import actions from '../actions/actions.mjs';
import { app, matchRecordSearch } from '../stores/index.mjs';
import page from '../common/page.mjs';

const html = `
<form method="get" action="${app.deploy}/">
	<input type="text" name="id" placeholder="IDを入力" autocapitalize="off"/>
	<button type="submit">検索</button>
</form>

<style>
form {
	margin-top: 60px;
	text-align: center;
}
</style>
`;

export default class MatchRecordSearchForm extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;

		const form = shadowRoot.querySelector('form');
		this.searchIdInput = form.querySelector('input[name="id"]');
		this.submitButton = form.querySelector('button[type="submit"]');

		this.searchIdInput.onchange = () => {
			actions.inputSearchId(this.searchIdInput.value);
		};

		form.onsubmit = (e) => {
			e.preventDefault();
			page(`${app.deploy}/?id=${matchRecordSearch.searchId}`);
		};
		
		this.handleMatchRecordSearchChange = this.handleMatchRecordSearchChange.bind(this);
	}

	connectedCallback() {
		matchRecordSearch.addEventListener('CHANGE', this.handleMatchRecordSearchChange);
		this.handleMatchRecordSearchChange();
	}

	disconnectedCallback() {
		matchRecordSearch.removeEventListener('CHANGE', this.handleMatchRecordSearchChange);
	}

	handleMatchRecordSearchChange() {
		this.searchId = matchRecordSearch.searchId;
		this.isFetching = matchRecordSearch.isFetching;
	}

	set searchId(val) {
		if(val === this._searchId) return;
		this._searchId = val;

		this.searchIdInput.value = val;
	}

	set isFetching(val) {
		if(val === this._isFetching) return;
		this._isFetching = val;

		if(val === true) this.submitButton.disabled = true;
		else if(val === false) this.submitButton.disabled = false;
	}
}
