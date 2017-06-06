import useState from 'usestate';
import actions from '../actions/actions.js';
import { matchRecord } from '../stores/index.js';
import { browserHistory } from '../common/router.js';


const template = document.createElement('template');
/*
template.innerHTML = `
<td></td>
<td></td>
<td><a></a></td>
<td><a></a></td>
<td><button type="button">読み込む</button></td>
<style>
match-record-tr {
	display: table-row;
}
</style>
`;
*/

template.innerHTML = `
`;

@useState
export default class MatchRecordTr extends HTMLElement {
	constructor(record) {
		super();

		this.handleMatchRecordChange = this.handleMatchRecordChange.bind(this);
		this.record = record;

		this.style.display = 'table-row';
		//IEのためにtd要素はDOMで作る;
		this.tds = Array(5).fill(0).map(() => {
			return this.appendChild(document.createElement('td'));
		});
		this.tds[2].innerHTML = '<a></a>';
		this.tds[3].innerHTML = '<a></a>';
		this.tds[4].innerHTML = '<button type="button">読み込む</button>';

		this.kifuCopyButton = this.tds[4].querySelector('button');
		this.kifuCopyButton.addEventListener('click', (e) => {
			e.preventDefault();
			if(this.record.doesHaveKifu) {
				actions.copyKifu(record);
			}else {
				actions.fetchKifu(record);
			}
		});
	}

	handleMatchRecordChange(e) {
		this.setState(this.record);
	}

	handleUserAnchorClick(e) {
		e.preventDefault();
		browserHistory.pushState(e.currentTarget.href);
	}

	connectedCallback() {
		matchRecord.on('CHANGE', this.handleMatchRecordChange);
		this.handleMatchRecordChange();
	}

	disconnectedCallback() {
		matchRecord.removeListener('CHANGE', this.handleMatchRecordChange);
	}

	stateChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'time':
				this.tds[0].innerHTML = `<a href="${this.record.url}" target="_blank">${this.record.time}</a>`
				return;
			case 'className':
				this.tds[1].textContent = this.record.className;
				return;
			case 'black': {
				const a = this.tds[2].querySelector('a');
				a.href = `${location.pathname}?id=${this.record.black.split(' ')[0]}`;
				a.onclick = this.handleUserAnchorClick;
				a.textContent = this.record.black;

				return;
			}
			case 'white':
				const a = this.tds[3].querySelector('a');
				a.href = `${location.pathname}?id=${this.record.white.split(' ')[0]}`;
				a.onclick = this.handleUserAnchorClick;
				a.textContent = this.record.white;

				return;
			case 'isWinner':
				if(newValue) this.classList.add('winner');
				return;
			case 'isFetchingKifu':
				if(newValue) {
					this.kifuCopyButton.textContent = '読み込み中';
					this.kifuCopyButton.disabled = true;
				}else {
					this.kifuCopyButton.textContent = '読み込む';
					this.kifuCopyButton.disabled = false;
				}
				return;

			case 'doesHaveKifu':
				if(newValue) this.kifuCopyButton.textContent = 'コピーする';
				return;
		}
	}

	static get observedState() {
		return ['time', 'className', 'black', 'white', 'isWinner', 'isFetchingKifu', 'doesHaveKifu'];
	}
}

customElements.define('match-record-tr', MatchRecordTr);