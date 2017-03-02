import MatchRecordTr from './MatchRecordTr.js';

const template = document.createElement('template');
template.innerHTML = `
<table>
	<thead>
		<tr>
			<th>対局日時</th>
			<th>クラス</th>
			<th>先手</th>
			<th>後手</th>
			<th>棋譜</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>
<p class="annotation">※<span class="winner-box">&nbsp;</span>...勝ち</p>
`
export default class MatchRecordTable extends HTMLElement {
	constructor(props = {}) {
		super();
		const matchRecords = props.matchRecords;
		const content = this.constructor.template.content.cloneNode(true);
		const tbody = content.querySelector('tbody');
		matchRecords.forEach((matchRecord) => {
			const tr = new MatchRecordTr({ matchRecord });
			tbody.appendChild(tr);
		});

		this.appendChild(content);
	}

	static template = template;
}

customElements.define('match-record-table', MatchRecordTable);