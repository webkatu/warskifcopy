const html = `
<table>
	<thead>
		<tr is="match-record-header-tr"></tr>
	</thead>
	<tbody>
	</tbody>
</table>
<p class="annotation">※<span class="winner-box">&nbsp;</span>...勝ち</p>

<style>
:host {
	--winner-color: rgba(0, 110, 84, 0.1);
}

.annotation {
	font-size: 12px;
}

.annotation .winner-box {
	display: inline-block;
	width: 3em;
	color: var(--winner-color);
	background: var(--winner-color);
}

table {
	width: 100%;
	margin: 0 auto;
	border: 1px solid #ccc;
}

table tr.winner {
	background: var(--winner-color)
}

table th {
	background: #ddd;
}

table th,
table td {
	padding: 3px;
	border: 1px solid #ccc;
	text-align: center;
	vertical-align: middle;
}

table td a {
	color: var(--base-text-color);
	text-decoration: none;
}

a:hover {
	transition: var(--a-hover-transition);
	text-shadow: var(--a-hover-text-shadow);
}

@media screen and (max-width: 600px) {
	table tr th:nth-of-type(2),
	table tr td:nth-of-type(2) {
		display: none;
	}
}
</style>
`;

export default class MatchRecordsTable extends HTMLElement {
	constructor() {
		super();

		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = html;
		this.tbody = shadowRoot.querySelector('tbody');
	}

	set records(val) {
		if(val === this._records) return;
		this._records = val;

		this.tbody.innerHTML = '';
		val.forEach((record, i) => {
			const tr = document.createElement('tr', { is: 'match-record-tr' });
			tr.record = record;
			this.tbody.append(tr);
		});
	}
}