import leads from 'leads-router'
import config from './config.js';
import Index from './components/Index.js';
import sendPageView from './common/sendPageView.js';


function render(parent, component) {
	let child;
	while(child = parent.firstChild) parent.removeChild(child);

	parent.appendChild(component);
}

const router = leads.Router();

const appElements = document.querySelector('.app');

router.use((req, res, next) => {
	sendPageView();
	next();
});

router.get(config.entry + '/', async (req, res, next) => {
	if(req.query.id === undefined) return next();
	const index = new Index();
	index.setAttribute('search-id', req.query.id);
	render(appElements, index);

}, (req, res) => {
	render(appElements, new Index());
});


window.addEventListener('pathchange', (e) => {
	if(e.detail.method === 'pushState') router.get(e.detail.path);
	else router.get(e.detail.path, { addHistory: false });
});

window.addEventListener('popstate', (e) => {
	router.get(location.href, { addHistory: false, changePath: false });
});

router.get(location.href, { addHistory: false });
