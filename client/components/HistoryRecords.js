import useState from 'usestate';
import actions from '../actions/actions.js';
import { historyRecords } from '../stores/index.js';
import MatchRecordsTable from './MatchRecordsTable.js';

const template = document.createElement('template');
template.innerHTML = `
<a></a>
`;

@useState
export default class HistoryRecords extends HTMLElement {
	constructor() {
		super();

		this.handleHistoryRecordsChange = this.handleHistoryRecordsChange.bind(this);

		const content = template.content.cloneNode(true);
		this.a = content.querySelector('a');
		content.appendChild(this.matchRecordsTable = new MatchRecordsTable());
		this.appendChild(content);

		this.a.addEventListener('click', (e) => {
			e.preventDefault();
			if(historyRecords.shouldDisplay) {
				actions.hideHistoryRecords();
			}else {
				actions.showHistoryRecords();
			}
		});

	}

	handleHistoryRecordsChange(e) {
		this.setState(historyRecords);
	}

	connectedCallback() {
		historyRecords.on('CHANGE', this.handleHistoryRecordsChange);
		this.handleHistoryRecordsChange();
	}

	disconnectedCallback() {
		historyRecords.removeListener('CHANGE', this.handleHistoryRecordsChange);
	}

	stateChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'shouldDisplay':
				if(newValue) {
					this.a.textContent = '履歴を閉じる';
					this.appendChild(this.matchRecordsTable);
				}else {
					this.a.textContent = '履歴を見る(10件)';
					this.removeChild(this.matchRecordsTable);
				}
				return;

			case 'records':
				this.matchRecordsTable.setState({'records': historyRecords.records});
		}
	}

	static get observedState() { return ['shouldDisplay', 'records']; }
}

customElements.define('history-records', HistoryRecords);