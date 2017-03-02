import Header from './Header.js';
import Footer from './Footer.js';
import MatchRecordSearchForm from './MatchRecordSearchForm.js';
import MatchRecordSearch from './MatchRecordSearch.js';

export default class Index extends HTMLElement {
	constructor() {
		super();
		this.className = 'index';
		this.header = new Header();
		this.matchRecordSearchForm = new MatchRecordSearchForm();
		this.matchRecordSearch = new MatchRecordSearch();
		this.footer = new Footer();
		//this.searchHistory = new SearchHistory();
		this.appendChild(this.header);
		this.appendChild(this.matchRecordSearchForm);
		this.appendChild(this.matchRecordSearch);
		this.appendChild(this.footer);
		//this.appendChild(this.searchHistory);
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		switch(attr) {
			case 'search-id':
				this.matchRecordSearchForm.setAttribute('id-value', newValue);
				this.matchRecordSearch.setAttribute('search-id', newValue)
		}
	}

	static get observedAttributes() { return ['search-id']; }
}

customElements.define('x-index', Index);