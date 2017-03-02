import config from '../config.js';
import MatchRecordTable from './MatchRecordTable.js';

const template = document.createElement('template');
template.innerHTML = `
<article>
	<h1 style="display: none"></h1>
</article>
`;

export default class MatchRecordSearch extends HTMLElement {
	constructor() {
		super();

		const content = this.constructor.template.content.cloneNode(true);
		this.article = content.querySelector('article');
		this.appendChild(content);
	}

	async attributeChangedCallback(attr, oldValue, newValue) {
		switch(attr) {
			case 'search-id':
				this.setAttribute('loading-state', 'loading');
				const p = document.createElement('p');
				p.textContent = '検索中...';
				this.article.appendChild(p);

				const matchRecords = await getMatchRecords(newValue);
				this.querySelector('h1').textContent = newValue
				this.article.appendChild(new MatchRecordTable({ matchRecords }));

				this.setAttribute('loading-state', 'loaded');
				this.article.removeChild(p);
				break;

			case 'loading-state':
				break;
		}
	}

	static get observedAttributes() { return ['search-id', 'loading-state']; }

	static template = template;
}

customElements.define('match-record-search', MatchRecordSearch);

async function getDoc(id, className) {
	const response = await fetch(`${config.server}?url=${config.url[className].replace(':id', id)}`, {
		method: 'GET',
		mode: 'cors',
	});
	let text = await response.text();
	if(text[0] !== '$') return null;
	text = text.replace(/^\$\("#history"\)\.html\(/, '').replace(/"\);/, '"');
	return new DOMParser().parseFromString(eval(text), 'text/html');;
}

function getMatchRecord(element, className) {
	if(element.querySelector('img[src*="taikyoku"]')) return null;

	const black = element.querySelectorAll('tr')[0].children[1].textContent;
	const white = element.querySelectorAll('tr')[1].children[1].textContent;
	
	let winner = '';
	if(element.children[0].classList.contains('win')) winner = 'black';
	else if(element.children[1].classList.contains('win')) winner = 'white';
	
	let time = element.children[3].textContent;
	if(time === '') time = element.children[4].textContent;
	const url = 'https:' + element.querySelectorAll('a')[2].getAttribute('href');
	
	return { black, white, winner, time, url, class: className};

}

async function getMatchRecordsOfClass(id, className) {
	const doc = await getDoc(id, className);
	if(doc === null) return [];
	const matchRecords = Array.from(doc.querySelectorAll('.contents'), (content) => {
		return getMatchRecord(content, className);
	});
	if(matchRecords[0] === null) matchRecords.shift();
	return matchRecords;
}

async function getMatchRecords(id) {
	const matchRecords = [];
	for(const prop in config.url) {
		matchRecords.push(...await getMatchRecordsOfClass(id, prop));
	}
	matchRecords.sort((a, b) => {
		const aTime = new Date(a.time).getTime();
		const bTime = new Date(b.time).getTime();
		if(aTime > bTime) return -1;
		if(aTime < bTime) return 1;
		return 0;
	});

	return matchRecords.slice(0, 10);
}

function saveMatchRecord(matchRecord) {
	if(matchRecord === null) return;
	let matchRecords = JSON.parse(localStorage.getItem('matchRecords'));
	if(matchRecords === null) matchRecords = [];
	matchRecords.push(matchRecord);
	if(matchRecords.length > 10) matchRecords.pop();
	if(matchRecords[1] !== undefined && matchRecords[0].url === matchRecords[1].url) matchRecords.shift();

	localStorage.setItem('matchRecords', JSON.stringify(matchRecords));
}