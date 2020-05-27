import dispatcher from '../common/dispatcher.mjs';

const initialState = {
	text: '',
	displayTime: 0,
	displayId: 0,
}

export default class Notification extends EventTarget {
	constructor() {
		super();

		Object.assign(this, initialState);

		dispatcher.addEventListener('fetchMatchRecords', () => {
			this.displayId++;
			this.displayTime = 30000;
			this.text = '読み込み中...';

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchMatchRecordsSuccessful', (e) => {
			this.displayId++;

			if(e.detail.records.length === 0) {
				this.displayTime = 5000;
				this.text = '棋譜が見つかりませんでした'
			}else {
				this.displayTime = 0;
				this.text = '';
			}

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchMatchRecordsFailed', (e) => {
			this.displayId++;
			this.displayTime = 5000;

			if(e.detail.error.message === '404') this.text = 'アカウントが存在しません';
			else this.text = '対局の読み込みに失敗しました';

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('fetchKifuFailed', () => {
			this.displayId++;
			this.displayTime = 5000;
			this.text = '棋譜の読み込みに失敗しました';

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('copyKifu', () => {
			this.displayId++
			this.displayTime = 7000;
			this.text = '棋譜をクリップボードにコピーしました';

			this.dispatchEvent(new Event('CHANGE'));
		});

		dispatcher.addEventListener('copyKifuFailed', () => {
			this.displayId++
			this.displayTime = 10000;
			this.text = 'もう一度ボタンを押してください';

			this.dispatchEvent(new Event('CHANGE'));
		});
	}
}