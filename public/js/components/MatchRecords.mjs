import actions from '../actions/actions.mjs';
import { matchRecordSearch, matchRecords } from '../stores/index.mjs';

const html = `
<match-records-table></match-records-table>
<a>更に読み込む</a>
<p></p>

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

export default class MatchRecords extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;

		this.matchRecordsTable = shadowRoot.querySelector('match-records-table');
		this.a = shadowRoot.querySelector('a');
		this.p = shadowRoot.querySelector('p');

		this.a.addEventListener('click', (e) => {
			e.preventDefault();
			if(matchRecordSearch.isFetching === true) return;
			actions.fetchMatchRecords(
				matchRecordSearch.searchId,
				matchRecordSearch.urls,
				matchRecordSearch.nextPage,
			);
		});

		this.handleMatchRecordSearchChange = this.handleMatchRecordSearchChange.bind(this);
		this.handleMatchRecordsChange = this.handleMatchRecordsChange.bind(this);
	}

	connectedCallback() {
		matchRecordSearch.addEventListener('CHANGE', this.handleMatchRecordSearchChange);
		matchRecords.addEventListener('CHANGE', this.handleMatchRecordsChange);

		this.handleMatchRecordSearchChange();
		this.handleMatchRecordsChange();
	}

	disconnectedCallback() {
		matchRecordSearch.removeEventListener('CHANGE', this.handleMatchRecordSearchChange);
		matchRecords.removeEventListener('CHANGE', this.handleMatchRecordsChange);
	}

	handleMatchRecordSearchChange() {
		this.isFetching = matchRecordSearch.isFetching;
		this.isLimit = matchRecordSearch.isLimit;
	}

	handleMatchRecordsChange() {
		this.records = matchRecords.records;
	}

	set isFetching(val) {
		if(val === this._isFetching) return;
		this._isFetching = val;

		if(val === true) {
			this.p.style.display = '';
			this.p.textContent = '読み込み中...';
		}else if(val === false) {
			this.p.style.display = 'none';
			this.p.textContent = '';
		}
	}

	set isLimit(val) {
		if(val === this._isLimit) return;
		this._isLimit = val;

		if(val === true) this.a.style.display = 'none';
		else if(val === false) this.a.style.display = '';
	}

	set records(val) {
		if(val === this._records) return;
		this._records = val;

		let records = val;
		//最大で1回30件のrecordがあるが常に10件ずつしか表示しない;
		//10切れ、3切れ、10秒が10件ずつなので
		//10件以上表示すると時間順のソートが不適切になる;
		//もう取得するrecordがない場合は、全てのrecordを表示する;
		if(matchRecordSearch.isLimit === false) records = records.slice(0, (matchRecordSearch.nextPage - 1) * 10); 
		this.matchRecordsTable.records = records;

		if(val.length === 0) this.style.display = 'none';
		else this.style.display = '';
	}
}
