const template = document.createElement('template');
template.innerHTML = `
<footer>
	<p>使い方</p>
	<p>フォームにIDを入力して検索すると最新の対局10件が取得されます。棋譜は<strong>「読み込む」クリック→「コピーする」クリック</strong>でクリップボードにコピーされます。</p>
	<address>作者: <a href="https://twitter.com/vinyufi" target="_blank">@vinyufi</a></address>
</footer>
`;
export default class Footer extends HTMLElement {
	constructor() {
		super();

		const content = this.constructor.template.content.cloneNode(true);
		this.appendChild(content);
	}

	static template = template;
}

customElements.define('x-footer', Footer);