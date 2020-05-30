import page from '../common/page.mjs';
export default class SPAAnchor extends HTMLAnchorElement {
	constructor() {
		super();

		this.onclick = (e) => {
			e.preventDefault();
			if(location.href === e.currentTarget.href) page.redirect(e.currentTarget.pathname + e.currentTarget.search)
			else page(e.currentTarget.pathname + e.currentTarget.search);
		}
	}
}