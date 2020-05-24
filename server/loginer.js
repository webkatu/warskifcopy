const fs = require('fs').promises;
const secret = require('./secret.js');

module.exports = {
	async hasLoggedIn(page) {
		await page.goto(`https://shogiwars.heroz.jp/games/history?locale=ja&user_id=${secret.warsID}`);
		await page.waitFor('#wrapper, [src*="error_icon"]');

		if(await page.$('#wrapper') === null) return false;
		return true;
	},

	async saveCookiesAndLocalStorage(page) {
		await page.goto(`https://shogiwars.heroz.jp/games/history?locale=ja&user_id=${secret.warsID}`);
		await page.waitFor('#wrapper, [src*="error_icon"]');

		const cookies = JSON.stringify(await page.cookies());
		await fs.writeFile(__dirname + '/cookies.json', cookies);

		const localStorage = await page.evaluate(() => {
			return JSON.stringify(localStorage);
		});
		await fs.writeFile(__dirname + '/localStorage.json', localStorage);
	},

	async loginWithIDPass(page) {
		await page.goto('https://shogiwars.heroz.jp/web_app/standard/');
		await page.waitFor('#main_game');
		await page.waitFor(5000);

		await page.click('#main_game');
		await page.waitFor(2000);
		await page.click('#main_game');
		await page.waitFor(2000);

		console.log('access to shogiwars');

		await page.mouse.click(400, 500);

		await page.waitFor(6000);

		//ここからログイン画面;

		console.log('access to login view');

		const elementHandle = await page.$('#web_view');
		const frame = await elementHandle.contentFrame();

		await frame.type('[name="name"]', secret.warsID);
		await frame.type('[name="password"]', secret.warsPassword);
		//frame.click('[name="commit"]');
		await page.mouse.click(400, 280);

		await page.waitFor(3000);
	},

	async loginWithCookie(page) {
		await page.goto('https://shogiwars.heroz.jp/web_app/standard/');
		await page.waitFor('#main_game');

		const cookies = JSON.parse(await fs.readFile(__dirname + '/cookies.json', 'utf-8'));
		for(const cookie of cookies) {
			await page.setCookie(cookie);
		}

		const localStorage = JSON.parse(await fs.readFile(__dirname + '/localStorage.json'));
		await page.evaluate((json) => {
			Object.keys(json).forEach((prop) => {
				localStorage.setItem(prop, json[prop]);
			});
		}, localStorage);
	},
}
