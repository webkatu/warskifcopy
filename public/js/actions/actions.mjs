import dispatcher from '../common/dispatcher.mjs';
import config from '../common/config.mjs';
import KifuConverter from '../common/KifuConverter.mjs';

export default {
	inputSearchId(value) {
		dispatcher.dispatchEvent(new CustomEvent('inputSearchId', { detail: { value } }));
	},

	async fetchMatchRecords(searchId, urls, page) {
		dispatcher.dispatchEvent(new Event('fetchMatchRecords'));
			let records = [];
			try {
				records = await fetchRecords(urls, searchId, page);
			}catch(e) {
				console.log(e);
				return dispatcher.dispatchEvent(new CustomEvent('fetchMatchRecordsFailed', { detail: { error: e } }));
			}

			dispatcher.dispatchEvent(new CustomEvent('fetchMatchRecordsSuccessful', { detail: { records, page } }));
	},

	showHistoryRecords() {
		dispatcher.dispatchEvent(new Event('showHistoryRecords'));
	},

	hideHistoryRecords() {
		dispatcher.dispatchEvent(new Event('hideHistoryRecords'));
	},

	async fetchKifu(record) {
		dispatcher.dispatchEvent(new CustomEvent('fetchKifu', { detail: { record } }));
		try {
			var kifu = await fetchKifu(record.url, record);
			copyText(kifu);
			//await navigator.clipboard.writeText(kifu);
		}catch(e) {
			console.log(e);
			return dispatcher.dispatchEvent(new CustomEvent('fetchKifuFailed', { detail: { record } }));
		}
		dispatcher.dispatchEvent(new CustomEvent('fetchKifuSuccessful', { detail: { record, kifu } }));
	},

	async copyKifu(record) {
		copyText(record.kifu);
		//await navigator.clipboard.writeText(record.kifu);
		dispatcher.dispatchEvent(new CustomEvent('copyKifu', { detail: { record } }));
	},

	initApp() {
		controllerOfFetchRecords.abort();
		dispatcher.dispatchEvent(new Event('initApp'));
	},

	locationChange() {
		dispatcher.dispatchEvent(new Event('locationChange'));
	},
}

let controllerOfFetchRecords = new AbortController();
async function fetchRecords(urls, searchId, page) {
	controllerOfFetchRecords = new AbortController();
	const query = [];
	for(const className in urls) {
		query.push(`urls[]=${encodeURIComponent(urls[className].replace(':id', searchId).replace(':page', page))}`)
	}
	const queryString = `${query.join('&')}`;

	const response = await fetch(`${config.server}/?${queryString}`, {
		method: 'GET',
		mode: 'cors',
		signal: controllerOfFetchRecords.signal,
	});
	if(response.ok === false) throw new Error(response.statusText);
	const json = await response.json();

	const records = [];
	Object.keys(urls).forEach((className, i) => {
		const text = json[i];
		const doc = new DOMParser().parseFromString(text, 'text/html');

		if(doc.querySelector('[src*="error_icon"]') !== null) throw new Error(404);

		const matchRecords = Array.from(doc.querySelectorAll('.contents'), (element) => {
			//対局中のrecord;
			if(element.querySelector('img[src*="taikyoku"]')) return null;

			const players = element.querySelector('.players');
			const blackElement = players.children[0];
			const whiteElement = players.children[1];
			
			const black = blackElement.textContent.trim();
			const white = whiteElement.textContent.trim();

			const blackUserPage = config.warsOrigin + blackElement.children[1].getAttribute('href');
			const whiteUserPage = whiteElement.children[1].getAttribute('href');
			
			let winner = '';
			if(blackElement.children[1].classList.contains('win_player')) winner = 'black';
			else if(whiteElement.children[1].classList.contains('win_player')) winner = 'white';

			let date = element.querySelector('.game_date').textContent.trim();
			const matched = date.match(/\((.+)\)/);
			if(matched !== null) date = matched[1];
			const time = new Date(date).getTime();
			date = date.replace(/(.*?\/)/, ''); //year消す;

			const url = config.warsOrigin + element.querySelector('.game_replay a').getAttribute('href');
			const isWinner = element.querySelector('.game_caption').classList.contains('win_games');

			return {
				black,
				white,
				blackUserPage,
				whiteUserPage,
				winner,
				date,
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
		return records.push(...matchRecords);
	});
	return records;
}


let controllerOfFetchKifu = new AbortController();
async function fetchKifu(url, record) {
	controllerOfFetchKifu.abort();
	controllerOfFetchKifu = new AbortController();
	const response = await fetch(`${config.server}/?url=${url}`, {
		method: 'GET',
		mode: 'cors',
		signal: controllerOfFetchKifu.signal,
	});
	if(response.ok === false) throw new Error(response.statusText);
	const text = await response.text();
	const doc = new DOMParser().parseFromString(text, 'text/html');

	let kifuText = ``
	kifuText += `開始日時：${record.date}\n`;
	kifuText += `先手：${record.black}\n`;
	kifuText += `後手：${record.white}\n`;
	kifuText += `手数-指手-消費時間\n`;
	kifuText += Array.from(doc.querySelectorAll('option'), (el) => {
		return el.textContent;
	}).join('\n');

	const converter = new KifuConverter(doc);
	//const csaText = converter.convertToCSA();
	const kifText = converter.convertToKif();

	return kifText;
}

function copyText(text) {
	const textarea = document.createElement('textarea');
	document.body.appendChild(textarea);
	textarea.value = text;
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}