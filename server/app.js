const puppeteer = require('puppeteer');
const loginer = require('./loginer.js');
const express = require('express');

(async () => {

const browser = await puppeteer.launch({
	args: [
		'--no-sandbox',
		'--disable-setuid-sandbox',
		'--disable-gpu',
		'--disable-dev-shm-usage',
		'--no-first-run',
		'--no-zygote',
	],
}).catch((e) => {
	console.log(e);
	process.exit(1);
});

try {
	const page = await browser.newPage();
	page.on('dialog', async (dialog) => {
		console.log(dialog.message());
		await dialog.accept();
	});	
	await loginer.loginWithCookie(page);
	if(await loginer.hasLoggedIn(page) === true) {
		console.log('successful login with cookie');
	}else {
		await await loginer.loginWithIDPass(page);
		if(await loginer.hasLoggedIn(page) === false) throw new Error();
		else await loginer.saveCookiesAndLocalStorage(page);
		console.log('successful login with id and password');
	}
	await page.close();
}catch(e) {
	console.log(e);
	process.exit(1);
}

setInterval(async () => {
	try {
		var page = await browser.newPage();
		page.on('dialog', async (dialog) => {
			console.log(dialog.message());
			await dialog.accept();
		});	
		if(await loginer.hasLoggedIn(page) === true) {
			await page.close();
			return;
		}

		await loginer.loginWithIDPass(page);
		if(await loginer.hasLoggedIn(page) === false) {
			await page.close();
			return;
		}
		await loginer.saveCookiesAndLocalStorage(page);
		await page.close();
		console.log('successful re login');
	}catch(e) {
		await page.close();
		console.log(e);
	}
}, 1000 * 60 * 60);

const app = express();
const publicDir = __dirname + '/../public';

app.use('/warskifcopy/', express.static(publicDir, { index: false }));

app.use('/warskifcopy/server', async (req, res) => {
	try {
		if(req.query.urls && Array.isArray(req.query.urls)) {
			
			const page = await browser.newPage();
		
			const contents = [];
			for(const url of req.query.urls) {
				const content = await getShogiwarsContents(page, url).catch(async (e) => {
					await page.close();
					throw new Error();
				});
				contents.push(content);
			}
			res.json(contents);
		
			await page.close();
			
		}else if(req.query.url && typeof req.query.url === 'string') {
			const page = await browser.newPage();
			
			const content = await getShogiwarsContents(page, req.query.url).catch(async (e) => {
				await page.close();
				throw new Error();
			});
			res.send(content);

			await page.close();
		}else {
			throw new Error();
		}
	}catch(e) {
		console.log(e);
		res.sendStatus(403)
	}
});

app.get('*', (req, res, next) => {
	res.sendFile('/index.html', { root: publicDir });
});

app.listen(3005, () => {
	console.log('server started.');
});

async function getShogiwarsContents(page, warsURL) {
		const url = decodeURIComponent(warsURL);
		await page.goto(url);
		await page.waitFor('#wrapper, [src*="error_icon"]');

		return await page.content();
}

})();
