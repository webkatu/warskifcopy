import leads from 'leads-router';
import actions from '../actions/actions.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Index from './Index.js';
import config from '../config.js';
import sendPageView from '../common/sendPageView.js';

const template = document.createElement('template');
template.innerHTML = `
<div id="header"></div>
<div id="main"><div></div></div>
<div id="footer"></div>`;

export default class App extends HTMLElement {
	constructor() {
		super();

		const content = template.content.cloneNode(true);
		content.replaceChild(new Header(), content.firstChild);
		content.replaceChild(new Footer(), content.lastChild);
		const main = content.querySelector('#main');

		this.id = 'app';
		this.appendChild(content);

		const index = new Index();

		const router = leads.Router();

		router.use((req, res, next) => {
			main.removeChild(main.firstChild);
			next();
		});

		router.use((req, res, next) => {
			sendPageView();
			next();
		});

		router.get(config.deploy + '/',
			(req, res, next) => {
				if(req.query.id === undefined) return next();

				actions.inputSearchId(req.query.id);
				main.appendChild(index);
			},

			(req, res) => {
				main.appendChild(index);
			}
		);

		window.addEventListener('pathchange', (e) => {
			if(e.detail.method === 'pushState') router.get(e.detail.path);
			else router.get(e.detail.path, { addHistory: false });
		});

		window.addEventListener('popstate', (e) => {
			router.get(location.href, { addHistory: false, changePath: false });
		});

		router.get(location.href, { addHistory: false });
	}
}

customElements.define('x-app', App);