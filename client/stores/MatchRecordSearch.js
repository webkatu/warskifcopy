import Emitter from 'events';
import dispatcher from '../dispatcher.js';

const initialState = {
	searchId: '',
	start: 0,
	interval: 10,
	urls: {
		'10切れ': 'https://shogiwars.heroz.jp/users/history/:id?start=:start',
		'3切れ': 'https://shogiwars.heroz.jp/users/history/:id?gtype=sb&start=:start',
		'10秒': 'https://shogiwars.heroz.jp/users/history/:id?gtype=s1&start=:start',
	},
	isLimit: false,
	isFetching: false,
};

export default class MatchRecordSearch extends Emitter {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.on('inputSearchId', (value) => {
			this.searchId = value;
			this.emit();
		});

		dispatcher.on('fetchMatchRecords', async () => {
			this.isFetching = true;
			this.emit('CHANGE');
		});

		dispatcher.on('fetchMatchRecordsFailed', () => {
			this.isFetching = false;
			this.emit('CHANGE');
		});

		dispatcher.on('fetchMatchRecordsSuccessful', (records) => {
			this.isFetching = false;
			if(records.length < this.interval) {
				//もう読み込む対局が無い時;
				this.isLimit = true;
				this.start += records.length;
			}else {
				this.start += this.interval;
			}

			this.emit('CHANGE');
		});

		dispatcher.on('unmountIndex', () => {
			const searchId = this.searchId;
			Object.assign(this, JSON.parse(JSON.stringify(initialState)), { searchId });
			this.emit('CHANGE');
		});
	}
}
