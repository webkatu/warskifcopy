import dispatcher from '../dispatcher.js';
import getMoveText from '../common/getMoveText.js';
import config from '../config.js';

export default {
	inputSearchId(value) {
		dispatcher.emit('inputSearchId', value);
	},

	async fetchMatchRecords(searchId, urls, start) {
		dispatcher.emit('fetchMatchRecords');
			const records = [];
			try {
				for(const className in urls) {
					records.push(...await fetchRecords(urls[className], className, searchId, start));
				}
			}catch(e) {
				console.log(e);
				return dispatcher.emit('fetchMatchRecordsFailed');
			}

			dispatcher.emit('fetchMatchRecordsSuccessful', records);
	},

	showHistoryRecords() {
		dispatcher.emit('showHistoryRecords');
	},

	hideHistoryRecords() {
		dispatcher.emit('hideHistoryRecords');
	},

	async fetchKifu(record) {
		dispatcher.emit('fetchKifu', record);
		try {
			var kifu = await fetchKifu(record.url, record);
		}catch(e) {
			console.log(e);
			return dispatcher.emit('fetchKifuFailed', record);
		}
		dispatcher.emit('fetchKifuSuccessful', record, kifu);
	},

	copyKifu(record) {
		copyText(record.kifu);
		dispatcher.emit('copyKifu', record);
	},

	unmountIndex() {
		dispatcher.emit('unmountIndex');
	}
}

async function fetchRecords(warsURL, className, searchId, start) {
	const response = await fetch(`${config.server}?url=${encodeURIComponent(warsURL.replace(':id', searchId).replace(':start', start))}`, {
		method: 'GET',
		mode: 'cors',
	});
	let text = await response.text();
	if(text[0] !== '$') return [];
	text = text.replace(/^\$\("#history"\)\.html\(/, '').replace(/"\);/, '"');
	const doc = new DOMParser().parseFromString(eval(text), 'text/html');
	const matchRecords = Array.from(doc.querySelectorAll('.contents'), (element) => {
		//対局中のrecord;
		if(element.querySelector('img[src*="taikyoku"]')) return null;

		const black = element.querySelectorAll('tr')[0].children[1].textContent;
		const white = element.querySelectorAll('tr')[1].children[1].textContent;

		const blackUserPage = config.warsOrigin + element.querySelectorAll('a')[0].getAttribute('href');
		const whiteUserPage = config.warsOrigin + element.querySelectorAll('a')[1].getAttribute('href');
		
		let winner = '';
		if(element.children[0].classList.contains('win')) winner = 'black';
		else if(element.children[1].classList.contains('win')) winner = 'white';

		let time = element.children[3].textContent;
		if(time === '') time = element.children[4].textContent;
		const url = 'https:' + element.querySelectorAll('a')[2].getAttribute('href');
		
		return {
			black,
			white,
			blackUserPage,
			whiteUserPage,
			winner,
			time,
			url,
			className,
			isWinner: element.classList.contains('winner'),
			isFetchingKifu: false,
			doesHaveKifu: false,
			kifu: '',
		};
	});
	//対局中のrecordが含まれていたら削除;
	if(matchRecords[0] === null) matchRecords.shift();
	return matchRecords;
}

async function fetchKifu(url, record) {
	const response = await fetch(`${config.server}?url=${url}`, {
		method: 'GET',
		mode: 'cors',
	});
	const text = await response.text();
	const doc = new DOMParser().parseFromString(text, 'text/html');
	let queryIndex = 11;
	if(doc.querySelectorAll('script')[queryIndex].textContent.indexOf('receiveMove') === -1) queryIndex = 12;
	if(doc.querySelectorAll('script')[queryIndex].textContent.indexOf('receiveMove') === -1) queryIndex = 13;
	const moves = doc.querySelectorAll('script')[queryIndex].textContent.match(/receiveMove\(\"(.+)\"\);/)[1].split('\t');
	moves.pop();
	let kifuText = ``
	kifuText += `開始日時：${record.time}\n`;
	kifuText += `先手：${record.black}\n`;
	kifuText += `後手：${record.white}\n`;
	kifuText += `手数-指手-消費時間\n`;
	kifuText += moves.map((move, i) => {
		const moveText = getMoveText(i, moves);
		return moveText.replace(/(▲|△)(\d)?/, (match, p1, p2) => {
			if(p2 === undefined) return '';
			return String.fromCharCode(p2.charCodeAt(0) + 0xFEE0);
		});
	}).join('\n');

	return kifuText;
}

function copyText(text) {
	const textarea = document.createElement('textarea');
	document.body.appendChild(textarea);
	textarea.value = text;
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
