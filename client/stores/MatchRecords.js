import Emitter from 'events';
import dispatcher from '../dispatcher.js';

const initialState = {
	records: [],
};

export default class MatchRecords extends Emitter {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.on('fetchMatchRecordsSuccessful', (records) => {
			if(records.length === 0) return;
			
			this.records = this.records.concat(records);
			this.records.sort((a, b) => {
				const aTime = new Date(a.time).getTime();
				const bTime = new Date(b.time).getTime();
				if(aTime > bTime) return -1;
				if(aTime < bTime) return 1;
				return 0;
			});

			this.emit('CHANGE');
		});

		dispatcher.on('unmountIndex', () => {
			Object.assign(this, JSON.parse(JSON.stringify(initialState)));
			this.emit('CHANGE');
		});
	}
}
