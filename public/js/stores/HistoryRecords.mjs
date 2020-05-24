import dispatcher from '../common/dispatcher.mjs';

const initialState = {
	records: [],
	shouldDisplay: false,
};

export default class HistoryRecords extends EventTarget {
	constructor() {
		super();

		Object.assign(this, JSON.parse(JSON.stringify(initialState)));

		dispatcher.addEventListener('showHistoryRecords', () => {
			this.shouldDisplay = true;
			this.records = JSON.parse(localStorage.getItem('records')) || [];
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('hideHistoryRecords', () => {
			this.shouldDisplay = false;
			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchKifuSuccessful', () => {
			this.records = JSON.parse(localStorage.getItem('records')) || [];
			this.dispatchEvent(new Event('CHANGE'));
		});
	}
}