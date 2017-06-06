import Emitter from 'events';
import dispatcher from '../dispatcher.js';

const initialState = {};

export default class MatchRecord extends Emitter {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.on('fetchKifu', (record) => {
			record.isFetchingKifu = true;
			this.emit('CHANGE');
		});

		dispatcher.on('fetchKifuSuccessful', (record, kifu) => {
			record.kifu = kifu;
			record.doesHaveKifu = true;
			record.isFetchingKifu = false;
			saveRecord(record);

			this.emit('CHANGE');
		});

		dispatcher.on('fetchKifuFailed', (record) => {
			record.isFetchingKifu = false;
			this.emit('CHANGE');
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