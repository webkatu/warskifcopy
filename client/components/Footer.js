const template = document.createElement('template');
template.innerHTML = `
<footer>
	<section>
		<h1>お知らせ</h1>
		<p>10件以上読み込めるようになりました</p>
		<p>読み込んだ棋譜の履歴を残せるようになりました</p>
	</section>
	<section>
		<h1>使い方</h1>
		<p>フォームにIDを入力して検索すると最新の対局10件が取得されます。棋譜は<strong>「読み込む」クリック→「コピーする」クリック</strong>でクリップボードにコピーされます。</p>
	</section>
	<address>作者: <a href="https://twitter.com/vinyufi" target="_blank">@vinyufi</a></address>
</footer>
`;
export default class Footer extends HTMLElement {
	constructor() {
		super();

		const content = template.content.cloneNode(true);
		this.appendChild(content);
	}

}

customElements.define('x-footer', Footer);