import Emitter from 'events';
import dispatcher from '../dispatcher.js';

const initialState = {
	records: [],
	shouldDisplay: false,
};

export default class HistoryRecords extends Emitter {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.on('showHistoryRecords', () => {
			this.shouldDisplay = true;
			this.records = JSON.parse(localStorage.getItem('records')) || [];
			this.emit('CHANGE');
		});

		dispatcher.on('hideHistoryRecords', () => {
			this.shouldDisplay = false;
			this.emit('CHANGE');
		});

		dispatcher.on('fetchKifuSuccessful', () => {
			this.records = JSON.parse(localStorage.getItem('records')) || [];
			this.emit('CHANGE');
		});
	}
}