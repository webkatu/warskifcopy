import dispatcher from '../dispatcher.js';

export default {
	inputSearchForm(value) {
		dispatcher.emit('inputSearchForm', value);
	},

	fetchMatchRecords() {
		dispatcher.emit('fetchMatchRecord');
		//fetch

		dispatcher.emit('fetchMatchRecordSuccessful');
	},

	fetchMoreMatchRecords() {
		dispatcher.emit('fetchMoreMatchRecord');
		//fetch

		dispatcher.emit('fetchMoreMatchRecordSuccessful');
	},

	fetchKifu(recordNumber, doesContainHistory) {
		dispatcher.emit('fetchKifu', doesContainHistory);
	},

	copyKifu(recordNumber, doesContainHistory) {
		dispatcher.emit('copyKifu', doesContainHistory);
	},

	showHistoryRecords() {
		dispatcher.emit('showHistoryRecords');
	},


}