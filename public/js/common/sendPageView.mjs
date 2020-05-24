export default function sendPageView() {
	if(! window.ga) return;
	ga('send', 'pageView', {
		page: location.pathname + location.search,
		title: document.title,
	});
}
