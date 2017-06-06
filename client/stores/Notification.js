import Emitter from 'events';
import dispatcher from '../dispatcher.js';

const initialState = {
	text: '',
	displayTime: 0,
	displayId: 0,
}

export default class Notification extends Emitter {
	constructor() {
		super();

		Object.assign(this, initialState);

		dispatcher.on('fetchMatchRecordsFaild', () => {
			this.displayId++;
			this.displayTime = 5000;
			this.text = '対局の読み込みに失敗しました';

			this.emit('CHANGE');
		});

		dispatcher.on('fetchKifuFailed', () => {
			this.displayId++;
			this.displayTime = 5000;
			this.text = '棋譜の読み込みに失敗しました';

			this.emit('CHANGE');
		});

		dispatcher.on('copyKifu', () => {
			this.displayId++
			this.displayTime = 7000;
			this.text = '棋譜をクリップボードにコピーしました';

			this.emit('CHANGE');
		});
	}
}