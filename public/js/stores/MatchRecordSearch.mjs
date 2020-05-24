import dispatcher from '../common/dispatcher.mjs';

const initialState = {
	searchId: '',
	nextPage: 1,
	interval: 10,
	urls: {
		'10切れ': 'https://shogiwars.heroz.jp/games/history?locale=ja&user_id=:id&page=:page',
		'3切れ': 'https://shogiwars.heroz.jp/games/history?gtype=sb&locale=ja&user_id=:id&page=:page',
		'10秒': 'https://shogiwars.heroz.jp/games/history?gtype=s1&locale=ja&user_id=:id&page=:page',
	},
	isLimit: false,
	isFetching: false,
};

export default class MatchRecordSearch extends EventTarget {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.addEventListener('inputSearchId', (e) => {
			this.searchId = e.detail.value;
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchMatchRecords', () => {
			this.isFetching = true;
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchMatchRecordsFailed', () => {
			this.isFetching = false;
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchMatchRecordsSuccessful', (e) => {
			this.isFetching = false;
			if(e.detail.records.length < this.interval) {
				//もう読み込む対局が無い時;
				this.isLimit = true;
				this.nextPage++;
			}else {
				this.nextPage++;
			}

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('initApp', () => {
			Object.assign(this, JSON.parse(JSON.stringify(initialState)));
			this.dispatchEvent(new Event('CHANGE'));
		});
	}
}
