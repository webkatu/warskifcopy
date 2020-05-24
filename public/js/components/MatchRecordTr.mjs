import actions from '../actions/actions.mjs';
import { app, matchRecord } from '../stores/index.mjs';

const html = `
<td></td>
<td></td>
<td><a is="spa-anchor"></a></td>
<td><a is="spa-anchor"></a></td>
<td><button type="button">コピー</button></td>
`;

export default class MatchRecordTr extends HTMLTableRowElement {
	constructor() {
		super();

		this.innerHTML = html;

		this.tds = this.querySelectorAll('td');
		this.kifuCopyButton = this.querySelector('button');
		this.kifuCopyButton.onclick = (e) => {
			e.preventDefault();
			if(this.record.doesHaveKifu) {
				actions.copyKifu(this.record);
			}else {
				actions.fetchKifu(this.record);
			}
		};
		this.handleMatchRecordChange = this.handleMatchRecordChange.bind(this);
	}

	connectedCallback() {
		matchRecord.addEventListener('CHANGE', this.handleMatchRecordChange);
		this.handleMatchRecordChange();
	}

	disconnectedCallback() {
		matchRecord.removeEventListener('CHANGE', this.handleMatchRecordChange);
	}

	handleMatchRecordChange() {
		this.date = this.record.date;
		this.className = this.record.className;
		this.black = this.record.black;
		this.white = this.record.white;
		this.isWinner = this.record.isWinner;
		this.isFetchingKifu = this.record.isFetchingKifu;
		this.doesHaveKifu = this.record.doesHaveKifu;
	}

	set date(val) {
		if(val === this._date) return;
		this._date = val;

		this.tds[0].innerHTML = `<a  href="${this.record.url}" target="_blank">${val}</a>`;
	}

	set className(val) {
		if(val === this._className) return;
		this._className = val;

		this.tds[1].textContent = val;
	}

	set black(val) {
		if(val === this._black) return;
		this._black = val;

		const a = this.tds[2].querySelector('a');
		//split(' ')はスペースではなく&thinsp;
		a.href = `${app.deploy}/?id=${val.split(' ')[0]}`;
		a.textContent = val;
	}

	set white(val) {
		if(val === this._white) return;
		this._white = val;

		const a = this.tds[3].querySelector('a');
		a.href = `${app.deploy}/?id=${val.split(' ')[0]}`;
		a.textContent = val;
	}

	set isWinner(val) {
		if(val === this._isWinner) return;
		this._isWinner = val;

		if(val === true) this.classList.add('winner');
	}

	set isFetchingKifu(val) {
		if(val === this._isFetchingKifu) return;
		this._isFetchingKifu = val;

		if(val === true) {
			this.kifuCopyButton.textContent = 'コピー中';
			this.kifuCopyButton.disabled = true;
		}else if(val === false) {
			this.kifuCopyButton.textContent = 'コピー';
			this.kifuCopyButton.disabled = false;
		}
	}
}
