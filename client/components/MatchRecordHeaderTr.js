const template = document.createElement('template');
/*
template.innerHTML = `
<th>対局日時</th>
<th>クラス</th>
<th>先手</th>
<th>後手</th>
<th>棋譜</th>
`
*/
export default class MatchRecordHeaderTr extends HTMLElement {
	constructor() {
		super();

		//this.appendChild(template.content.cloneNode(true));
		//IEのためにth要素はDOMで作る;
		const ths = Array(5).fill(0).map(() => {
			return this.appendChild(document.createElement('th'));
		});
		ths[0].textContent = '対局日時';
		ths[1].textContent = '種別';
		ths[2].textContent = '先手';
		ths[3].textContent = '後手';
		ths[4].textContent = '棋譜';

		this.style.display = 'table-row';
	}
}

customElements.define('match-record-header-tr', MatchRecordHeaderTr);