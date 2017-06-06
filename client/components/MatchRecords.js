import useState from 'usestate';
import actions from '../actions/actions.js';
import { matchRecordSearch, matchRecords } from '../stores/index.js';
import MatchRecordsTable from './MatchRecordsTable.js';

const template = document.createElement('template');
template.innerHTML = `
<a>更に読み込む</a>
<p></p>
`;

@useState
export default class MatchRecords extends HTMLElement {
	constructor() {
		super();

		this.handleMatchRecordSearchChange = this.handleMatchRecordSearchChange.bind(this);
		this.handleMatchRecordsChange = this.handleMatchRecordsChange.bind(this);


		const content = template.content.cloneNode(true);
		this.a = content.querySelector('a');
		this.p = content.querySelector('p');

		this.appendChild(this.matchRecordsTable = new MatchRecordsTable());
		this.appendChild(content);
		
		this.a.addEventListener('click', (e) => {
			e.preventDefault();
			if(matchRecordSearch.isFetching === true) return;
			actions.fetchMatchRecords(
				matchRecordSearch.searchId,
				matchRecordSearch.urls,
				matchRecordSearch.start,
			);
		});

	}

	handleMatchRecordSearchChange() {
		this.setState(matchRecordSearch);
	}

	handleMatchRecordsChange() {
		this.setState(matchRecords);
	}

	connectedCallback() {
		matchRecordSearch.on('CHANGE', this.handleMatchRecordSearchChange);
		matchRecords.on('CHANGE', this.handleMatchRecordsChange);

		this.handleMatchRecordSearchChange();
		this.handleMatchRecordsChange();
	}

	disconnectedCallback() {
		matchRecordSearch.removeListener('CHANGE', this.handleMatchRecordSearchChange);
		matchRecords.removeListener('CHANGE', this.handleMatchRecordsChange);
	}

	stateChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'isFetching':
				if(newValue) {
					this.p.style.display = '';
					this.p.textContent = '読み込み中...';
				}
				else {
					this.p.style.display = 'none';
					this.p.textContent = '';
				}
				return;

			case 'isLimit':
				if(newValue) this.a.style.display = 'none';
				else this.a.style.display = '';
				return;

			case 'records':
				const records = newValue.slice(0, matchRecordSearch.start);

				this.matchRecordsTable.setState({ records });
				return;
		}
	}

	static get observedState() { return ['isFetching', 'isLimit', 'records']; }
}

customElements.define('match-records', MatchRecords);