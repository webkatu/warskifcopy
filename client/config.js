let deploy;
let server;
if(location.host.indexOf('pro.webkatu.com') === -1) {
	//dev
	deploy = '/warskifcopy/public';
	server = '/warskifcopy/server/index.php';
}else {
	//release
	deploy = '/warskifcopy';
	server = 'http://server.pro.webkatu.com/warskifcopy/index.php';
	//server = 'http://warskifucopy.webcrow.jp/index.php',
}

export default {
	deploy,
	server,
	warsOrigin: 'https://shogiwars.heroz.jp',
}