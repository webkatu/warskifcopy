const html = `
<th>対局日時</th>
<th>クラス</th>
<th>戦型</th>
<th>先手</th>
<th>後手</th>
<th>棋譜</th>
`;

export default class MatchRecordHeaderTr extends HTMLTableRowElement {
	constructor() {
		super();

		this.innerHTML = html;
	}
}
