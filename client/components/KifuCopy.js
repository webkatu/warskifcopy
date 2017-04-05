import config from '../config.js';
import getMoveText from '../common/getMoveText';

const template = document.createElement('template');
template.innerHTML = `
<button type="button">読み込む</button>
`;

export default class KifuCopy extends HTMLElement {
	constructor(props) {
		super();

		this.matchRecord = props.matchRecord;
		this.url = props.matchRecord.url;
		this.kifuText = null;
		const content = this.constructor.template.content.cloneNode(true);

		this.button = content.querySelector('button');
		this.button.addEventListener('click', async (e) => {
			if(this.kifuText === null) return await this.loadKifu();
			this.copyToClipboard();
			const notification = document.querySelector('x-notification');
			notification.setAttribute('text', 'コピーしました');
			notification.setAttribute('display-time', '5000');
		});
		this.appendChild(content);
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		switch(attr) {
			case 'loading-state':
				if(newValue === 'loading') {
					this.button.disabled = true;
					this.button.textContent = '読み込み中';
				}else if(newValue === 'loaded') {
					this.button.disabled = false;
					this.button.textContent = 'コピーする';
				}
				break;
		}
	}

	async loadKifu() {
		this.setAttribute('loading-state', 'loading');

		const response = await fetch(`${config.server}?url=${this.url}`, {
			method: 'GET',
			mode: 'cors',
		});
		const text = await response.text();
		const doc = new DOMParser().parseFromString(text, 'text/html');
		let queryIndex = 11;
		if(doc.querySelectorAll('script')[queryIndex].textContent.indexOf('receiveMove') === -1) queryIndex = 12;
		const moves = doc.querySelectorAll('script')[queryIndex].textContent.match(/receiveMove\(\"(.+)\"\);/)[1].split('\t');
		moves.pop();
		let kifuText = ``
		kifuText += `開始日時：${this.matchRecord.time}\n`;
		kifuText += `先手：${this.matchRecord.black}\n`;
		kifuText += `後手：${this.matchRecord.white}\n`;
		kifuText += `手数-指手-消費時間\n`;
		kifuText += moves.map((move, i) => {
			const moveText = getMoveText(i, moves);
			return moveText.replace(/(▲|△)(\d)?/, (match, p1, p2) => {
				if(p2 === undefined) return '';
				return String.fromCharCode(p2.charCodeAt(0) + 0xFEE0);
			});
		}).join('\n');

		this.kifuText = kifuText;
		this.setAttribute('loading-state', 'loaded');
	}

	async loadKifuOnChrome() {
		const response = await fetch(`${config.server}?url=${this.url}`);
		const text = await response.text();
		const iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
		const doc = iframe.contentWindow.document;
		doc.documentElement.innerHTML = text;
		changeScriptSrcFromrelativeToAbsolute(doc, new URL(this.url).origin);
		await evaluateScript(doc);
		const options = Array.from(doc.querySelectorAll('option'));
		options.shift(); options.pop();
		const kifuText = options.map((option) => {
			return option.textContent.replace(/^\d+\s/, '');
		}).join('\n');
		document.body.removeChild(iframe);

		return this.kifuText = kifuText;
	}

	copyToClipboard() {
		const textarea = document.createElement('textarea');
		document.body.appendChild(textarea);
		textarea.value = this.kifuText;
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
	}

	static get observedAttributes() { return ['loading-state']; }

	static template = template;
}

function changeScriptSrcFromrelativeToAbsolute(doc, base) {
	Array.from(doc.querySelectorAll('script'), (script) => {
		const src = script.getAttribute('src');
		if(src === null) return;
		const u = new URL(src, base);
		script.setAttribute('src', u.href);
	});
}

async function evaluateScript(doc) {
	const scripts = doc.querySelectorAll('script');
	for(let i = 0; i < scripts.length; i++) {
		const script = scripts[i];
		console.log(script);
		const newScript = doc.createElement('script');
		Array.from(script.attributes, (attr) => {
			newScript.setAttribute(attr.name, attr.value);
		});
		newScript.innerHTML = script.innerHTML;
		script.parentNode.insertBefore(newScript, script);
		script.parentNode.removeChild(script);
		if(newScript.getAttribute('src')) {
			await new Promise((res, rej) => {
				newScript.onload = res;
			});
		}
	}
	return doc;
}

customElements.define('kifu-copy', KifuCopy);
