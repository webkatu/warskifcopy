const html = `
<footer>
	<section>
		<h2>お知らせ</h2>
		<p>kif形式に対応しました。</p>
		<p>読み込んだ棋譜の履歴を残せるようになりました。</p>
	</section>
	<section>
		<h2>使い方</h2>
		<p>フォームにIDを入力して検索すると最新の対局10件が取得されます。棋譜は<strong>「コピー」をクリック</strong>でクリップボードにコピーされます。</p>
		<p>対局日時をクリックすると将棋ウォーズで棋譜が見れます。</p>
	</section>
	<address>作者: <a href="https://twitter.com/vinyufi" target="_blank">@vinyufi</a></address>
	<p><a href="https://github.com/webkatu/warskifcopy" target="_blank">GitHub</a></p>
</footer>

<style>
footer {
	margin-top: 40px;
	font-size: 12px;
}

a {
	color: var(--a-color);
	custor: pointer;
}

a:hover {
	transition: var(--a-hover-transition);
	text-shadow: var(--a-hover-text-shadow);
}

strong {
	color: var(--strong-color);
}
</style>
`;
export default class AppFooter extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;
	}

}