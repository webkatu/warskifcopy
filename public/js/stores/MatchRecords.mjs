import dispatcher from '../common/dispatcher.mjs';

const initialState = {
	records: [],
};

export default class MatchRecords extends EventTarget {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.addEventListener('initApp', () => {
			Object.assign(this, JSON.parse(JSON.stringify(initialState)));
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchMatchRecordsSuccessful', (e) => {
			//1回目の対局履歴取得時に、recordsを初期化;
			//対局履歴取得中に他のIDで対局履歴を取得されると、両方の履歴がrecordsに入ってしまうのを防ぐため;
			if(e.detail.page === 1) Object.assign(this, JSON.parse(JSON.stringify(initialState)));
			if(e.detail.records.length === 0) return;
			
			this.records = this.records.concat(e.detail.records);
			this.records.sort((a, b) => {
				const aTime = new Date(a.date).getTime();
				const bTime = new Date(b.date).getTime();
				if(aTime > bTime) return -1;
				if(aTime < bTime) return 1;
				return 0;
			});

			this.dispatchEvent(new Event('CHANGE'));
		});
	}
}
