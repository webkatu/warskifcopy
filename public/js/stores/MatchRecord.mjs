import dispatcher from '../common/dispatcher.mjs';

const initialState = {};

export default class MatchRecord extends EventTarget {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.addEventListener('fetchKifu', (e) => {
			e.detail.record.isFetchingKifu = true;
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchKifuSuccessful', (e) => {
			e.detail.record.kifu = e.detail.kifu;
			e.detail.record.doesHaveKifu = true;
			e.detail.record.isFetchingKifu = false;
			saveRecord(e.detail.record);

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchKifuFailed', (e) => {
			e.detail.record.isFetchingKifu = false;
			this.dispatchEvent(new Event('CHANGE'));
		});
	}
}

function saveRecord(record) {
	let records = JSON.parse(localStorage.getItem('records'));
	if(records === null) records = [];
	records.unshift(record);
	records.forEach((_record, i) => {
		if(i === 0) return;
		if(_record.time === record.time && _record.black === record.black && _record.white === record.white) {
			return records.splice(i, 1);
		}
	})
	records = records.slice(0, 10);
	localStorage.setItem('records', JSON.stringify(records));
}