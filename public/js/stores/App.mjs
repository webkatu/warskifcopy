const initialState = {
	deploy: '/warskifcopy',
	title: '将棋ウォーズ棋譜コピー',
};

export default class App extends EventTarget {
	constructor() {
		super();

		Object.assign(this, initialState);
	}
}
