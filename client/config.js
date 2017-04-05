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
	url: {
		'10切れ': 'https://shogiwars.heroz.jp/users/history/:id',
		'3切れ': 'https://shogiwars.heroz.jp/users/history/:id?gtype=sb',
		'10秒': 'https://shogiwars.heroz.jp/users/history/:id?gtype=s1',
	},
	warsOrigin: 'https://shogiwars.heroz.jp',
}