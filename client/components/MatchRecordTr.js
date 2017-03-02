import KifuCopy from './KifuCopy.js'

const template = document.createElement('template');
/*
template.innerHTML = `
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<style>
match-record-tr {
	display: table-row;
}
</style>
`;
*/

export default class MatchRecordTr extends HTMLElement {
	constructor(props) {
		super();

		const content = this.constructor.template.content.cloneNode(true);
		//IEのためにtd要素はtextではなくdomで作成;
		let i = 0;
		while(i < 5) {
			const td = document.createElement('td');
			content.appendChild(td);
			i++;
		}
		this.style.display = 'table-row';

		const matchRecord = props.matchRecord;
		content.childNodes[0].textContent = matchRecord.time;
		content.childNodes[1].textContent = matchRecord.class;
		content.childNodes[2].textContent = matchRecord.black;
		content.childNodes[3].textContent = matchRecord.white;
		if(matchRecord.winner === 'black') content.childNodes[2].classList.add('winner');
		else if(matchRecord.winner === 'white') content.childNodes[3].classList.add('winner');

		this.kifuCopy = new KifuCopy({ matchRecord });
		content.childNodes[4].appendChild(this.kifuCopy);

		this.appendChild(content);
	}

	static template = template;
}

customElements.define('match-record-tr', MatchRecordTr);