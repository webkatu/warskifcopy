import actions from '../actions/actions.js';
import { matchRecordSearch } from '../stores/index.js';
import MatchRecordSearchForm from './MatchRecordSearchForm.js';
import MatchRecords from './MatchRecords.js';
import HistoryRecords from './HistoryRecords.js';

/*
const template = document.createElement('template');
template.innerHTML = `
${new MatchRecordSearchForm().outerHTML}
${new MatchRecords().outerHTML}
${new HistoryRecords().outerHTML}
`;
*/

export default class Index extends HTMLElement {
	constructor() {
		super();

		this.className = 'index';
		this.appendChild(new MatchRecordSearchForm());
		this.appendChild(new MatchRecords());
		this.appendChild(new HistoryRecords());

		this.matchRecords = this.querySelector('match-records');
	}

	connectedCallback() {
		if(matchRecordSearch.searchId === ''){
			this.matchRecords.style.display = 'none';
		}else {
			actions.fetchMatchRecords(
				matchRecordSearch.searchId,
				matchRecordSearch.urls,
				matchRecordSearch.start
			);

			this.matchRecords.style.display = '';
		}
	}

	disconnectedCallback() {
		actions.unmountIndex();
	}

}

customElements.define('x-index', Index);