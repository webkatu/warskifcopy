import actions from '../actions/actions.mjs';
import { historyRecords } from '../stores/index.mjs';

const html = `
<a></a>
<match-records-table></match-records-table>

<style>
:host {
	display: block;
	margin-top: 20px;
}

a {
	color: var(--a-color);
	cursor: pointer;
}

a:hover {
	transition: var(--a-hover-transition);
	text-shadow: var(--a-hover-text-shadow);
}
</style>
`;

export default class HistoryRecords extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;

		this.matchRecordsTable = shadowRoot.querySelector('match-records-table');
		this.a = shadowRoot.querySelector('a');
		this.a.addEventListener('click', (e) => {
			e.preventDefault();
			if(historyRecords.shouldDisplay) {
				actions.hideHistoryRecords();
			}else {
				actions.showHistoryRecords();
			}
		});

		this.handleHistoryRecordsChange = this.handleHistoryRecordsChange.bind(this);
	}

	connectedCallback() {
		historyRecords.addEventListener('CHANGE', this.handleHistoryRecordsChange);
		this.handleHistoryRecordsChange();
	}

	disconnectedCallback() {
		historyRecords.removeEventListener('CHANGE', this.handleHistoryRecordsChange);
	}

	handleHistoryRecordsChange() {
		this.shouldDisplay = historyRecords.shouldDisplay;
		this.records = historyRecords.records;
	}

	set shouldDisplay(val) {
		if(val === this._shouldDisplay) return;
		this._shouldDisplay = val;

		if(val === true) {
			this.a.textContent = '履歴を閉じる';
			this.shadowRoot.append(this.matchRecordsTable);
		}else if(val === false) {
			this.a.textContent = '履歴を見る(10件)';
			this.shadowRoot.removeChild(this.matchRecordsTable);
		}
	}

	set records(val) {
		if(val === this._records) return;
		this._records = val;

		this.matchRecordsTable.records = val;
	}
}
