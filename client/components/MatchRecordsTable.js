import useState from 'usestate';
import MatchRecordHeaderTr from './MatchRecordHeaderTr.js';
import MatchRecordTr from './MatchRecordTr.js';

const template = document.createElement('template');
template.innerHTML = `
<table>
	<thead>
	</thead>
	<tbody>
	</tbody>
</table>
<p class="annotation">※<span class="winner-box">&nbsp;</span>...勝ち</p>
`;

@useState
export default class MatchRecordsTable extends HTMLElement {
	constructor() {
		super();

		const content = template.content.cloneNode(true);
		this.tbody = content.querySelector('tbody');
		
		content.querySelector('thead').appendChild(new MatchRecordHeaderTr());
		this.appendChild(content);
	}

	stateChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'records':
				this.tbody.innerHTML = '';
				newValue.forEach((record, i) => {
					this.tbody.appendChild(new MatchRecordTr(record));
				});
				return;
		}
	}

	static get observedState() { return ['records'] }
}

customElements.define('match-records-table', MatchRecordsTable);