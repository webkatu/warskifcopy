import actions from '../actions/actions.mjs';
import { matchRecordSearch } from '../stores/index.mjs';


const html = `
<match-record-search-form></match-record-search-form>
<match-records></match-records>
<history-records></history-records>
`;

export default class AppIndex extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;
		this.matchRecords = shadowRoot.querySelector('match-records');
	}

	async connectedCallback() {
		if(matchRecordSearch.searchId === ''){
		}else {
			await actions.fetchMatchRecords(
				matchRecordSearch.searchId,
				matchRecordSearch.urls,
				matchRecordSearch.nextPage
			);
		}
	}
}
