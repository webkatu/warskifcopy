export default class KifuConverter {
	constructor(warsGamesDoc) {
		this.warsGamesDoc = warsGamesDoc;
	}

	convertToKif() {
		const warsKifuText = this.warsGamesDoc.querySelector('[data-react-class="Show"]').getAttribute('data-react-props');
		const warsKifuJson = JSON.parse(warsKifuText).gameHash;

		const gtype = warsKifuJson.gtype;
		let timeLimit = '';
		if(gtype === '') timeLimit = '10分切れ負け';
		if(gtype === 'sb') timeLimit = '3分切れ負け';
		if(gtype === 's1') timeLimit = '秒読み10秒';

		let startBoard = '';
		const handicap = warsKifuJson.handicap;
		if(handicap === 0) startBoard = '平手';
		else if(handicap === 2) startBoard = '角落ち';
		else if(handicap === 3) startBoard = '飛車落ち';
		else if(handicap === 5) startBoard = '二枚落ち';
		else if(handicap === 6) startBoard = '四枚落ち';
		else if(handicap === 7) startBoard = '六枚落ち';
		else if(handicap ===8 ) startBoard = '八枚落ち';

		const anchors = this.warsGamesDoc.querySelectorAll('[target="_self"]');
		const black = anchors[1].textContent.slice(1);
		const white = anchors[0].textContent.slice(1);

		let maxTime = 0;
		if(gtype === '') maxTime = 600;
		if(gtype === 'sb') maxTime = 300;
		if(gtype === 's1') maxTime = 3600;
		let blackTimeLeft = maxTime;
		let whiteTimeLeft = maxTime;
		const movesElements = Array.from(this.warsGamesDoc.querySelectorAll('option'));
		movesElements.shift();
		const moves = [];
		warsKifuJson.moves.forEach((move, i) => {
			const movesElTextBefore = (movesElements[i-1]) ? movesElements[i-1].textContent : '';
			const movesElText = movesElements[i].textContent;
			
			let moveText = '';
			{
				const matched1 = movesElTextBefore.match(/(.*)\s(▲|△)(.)(.)(.*)/);
				const matched2 = movesElText.match(/(.*)\s(▲|△)(.)(.)(.*)/);

				if(matched1 === null || matched1[3] !== matched2[3] || matched1[4] !== matched2[4]) {
					moveText += `${matched2[1].padStart(4, ' ')} ${numToZenkaku(matched2[3])}${numToKanji(matched2[4])}${matched2[5]}`;
				}else {
					//一個前と符合一致したら同　○
					moveText += `${matched2[1].padStart(4, ' ')} 同　${matched2[5]}`;
				}
			}

			let centerSpace = '';
			{
				const matched = moveText.match(/\s*\d+\s(.*)\(/);
				if(matched === null) centerSpace = '     ';
				else if(matched[1].length === 3) centerSpace = '   ';
				else centerSpace = ' ';
			}

			let timeText = '';
			let second1 = 0;
			let second2 = 0;
			if(i % 2 === 0) {
				second1 = blackTimeLeft - move.t;
				second2 = maxTime - move.t;

				blackTimeLeft = move.t;
			}else {
				second1 = whiteTimeLeft - move.t;
				second2 = maxTime - move.t;

				whiteTimeLeft = move.t;
			}

			const time1 = secondToMinute(second1);
			const time2 = secondToMinute(second2);

			timeText = `( ${time1.minute}:${String(time1.second).padStart(2, '0')}/00:${String(time2.minute).padStart(2, '0')}:${String(time2.second).padStart(2, '0')})`;

			moves.push(`${moveText}${centerSpace}${timeText}`);
		});

		const movesText = moves.join('\n');


		const result = warsKifuJson.result;
		let resultMove = '';
		let resultText = '';
		const movesLastNum = Number(moves[moves.length - 1].match(/\s*(\d+)\s/)[1]);
		resultMove = `${String(movesLastNum + 1).padStart(4, ' ')} `;

		if(result.indexOf('TORYO') !== -1) {
			resultMove += '投了';
			if(result.indexOf('SENTE_WIN') !== -1) resultText = `まで${movesLastNum}手で先手の勝ち`;
			else resultText = `まで${movesLastNum}手で後手の勝ち`;
		}else if(result.indexOf('CHECKMATE') !== -1) {
			resultMove += '詰み';
			resultText = `まで${movesLastNum}手で詰み`;
		}else if(result.indexOf('TIMEOUT') !== -1) {
			resultMove += '切れ負け';
			if(result.indexOf('SENTE_WIN') !== -1) resultText = `まで${movesLastNum}手で時間切れにより先手の勝ち`;
			else resultText = `まで${movesLastNum}手で時間切れにより後手の勝ち`;
		}else if(result.indexOf('DISCONNECT') !== -1) {
			resultMove += '中断';
			resultText += `まで${movesLastNum}手で中断`;
		}else if(result.indexOf('ENTERINGKING') !== -1) {
			resultMove += '入玉勝ち';
			if(result.indexOf('SENTE_WIN') !== -1) resultText = `まで${movesLastNum}手で先手の勝ち`;
			else resultText = `まで${movesLastNum}手で後手の勝ち`;
		}else if(result.indexOf('OUTE_SENNICHI') !== -1) {
			resultMove += '反則勝ち';
			if(result.indexOf('SENTE_WIN') !== -1) resultText = `まで${movesLastNum}手で先手の反則勝ち`;
			else resultText = `まで${movesLastNum}手で後手の反則勝ち`;
		}else if(result.indexOf('DRAW_SENNICHI') !== -1) {
			resultMove += '千日手';
			resultText = `まで${movesLastNum}手で千日手`;
		}


		const kifText = 
`開始日時：${getDateText(warsKifuJson)}
棋戦：${getEventName(warsKifuJson)}
持ち時間：${timeLimit}
手合割：${startBoard}
先手：${black}
後手：${white}
手数----指手---------消費時間--
${movesText}
${resultMove}
${resultText}
`
		return kifText;
	}

	convertToCSA() {
		const warsKifuText = this.warsGamesDoc.querySelector('[data-react-class="Show"]').getAttribute('data-react-props');
		const warsKifuJson = JSON.parse(warsKifuText).gameHash;

		const anchors = this.warsGamesDoc.querySelectorAll('[target="_self"]');
		const black = anchors[1].textContent.slice(1);
		const white = anchors[0].textContent.slice(1);

		const gtype = warsKifuJson.gtype;
		let timeLimit = '';
		if(gtype === '') timeLimit = '00:10+00';
		else if(gtype === 'sb') timeLimit = '00:03+00';
		else if(gtype === 's1') timeLimit = '00:00+10';

		let startBoard = '';
		const handicap = warsKifuJson.handicap;
		if(handicap === 0) startBoard = 'PI';
		else if(handicap === 2) startBoard = 'PI22KA';
		else if(handicap === 3) startBoard = 'PI82HI';
		else if(handicap === 5) startBoard = 'PI22KA82HI';
		else if(handicap === 6) startBoard = 'PI22KA82HI11KY91KY';
		else if(handicap === 7) startBoard = 'PI22KA82HI11KY91KY21KE81KE';
		else if(handicap ===8 ) startBoard = 'PI22KA82HI11KY91KY21KE81KE31GI71GI';

		let maxTime = 0;
		if(gtype === '') maxTime = 600;
		if(gtype === 'sb') maxTime = 300;
		if(gtype === 's1') maxTime = 3600;
		let blackTimeLeft = maxTime;
		let whiteTimeLeft = maxTime;

		const moves = [];
		warsKifuJson.moves.forEach((move, i) => {
			moves.push(move.m);

			if(i % 2 === 0) {
				moves.push('T' + String(blackTimeLeft - move.t));
				blackTimeLeft = move.t;
			}else {
				moves.push('T' + String(whiteTimeLeft - move.t));
				whiteTimeLeft = move.t;
			}
		});

		let movesText = moves.join('\n');

		let resultText = '';
		const result = warsKifuJson.result;
		if(result.indexOf('TORYO') !== -1) resultText = '%TORYO';
		else if(result.indexOf('CHECKMATE') !== -1) resultText = '%TSUMI';
		else if(result.indexOf('TIMEOUT') !== -1) resultText = '%TIME_UP';
		else if(result.indexOf('DISCONNECT') !== -1) resultText = '%CHUDAN';
		else if(result.indexOf('ENTERINGKING') !== -1) resultText = '%KACHI';
		else if(result.indexOf('DRAW_SENNICHI') !== -1) resultText = '%SENNICHITE'
		else if(result.indexOf('OUTE_SENNICHI') !== -1) {
			if(result.indexOf('GOTE') !== -1) resultText = '%+ILLEGAL_ACTION';
			else resultText = '%-ILLEGAL_ACTION';
		}


		let csaText = 
`V2.2
N+${black}
N-${white}
$EVENT:${getEventName(warsKifuJson)}
$START_TIME:${getDateText(warsKifuJson)}
$TIME_LIMIT:${timeLimit}
${startBoard}
+
${movesText}
${resultText}
`
		return csaText;
	}
}

function getEventName(warsKifuJson) {
	let event = '';
	const gtype = warsKifuJson.gtype;
	if(gtype === '') event = '将棋ウォーズ(10分切れ負け)';
	else if(gtype === 'sb') event = '将棋ウォーズ(3分切れ負け)';
	else if(gtype === 's1') event = '将棋ウォーズ(1手10秒)';
	return event;
}

function getDateText(warsKifuJson) {
		let dateText = warsKifuJson.name.match(/.*-(.*)$/)[1];
		const year = dateText.slice(0, 4);
		const month = dateText.slice(4, 6);
		const date = dateText.slice(6, 8);
		const hour = dateText.slice(9, 11);
		const minute = dateText.slice(11, 13);
		const second = dateText.slice(13, 15);
		dateText = `${year}/${month}/${date} ${hour}:${minute}:${second}`;
		return dateText;
}

function numToKanji(num) {
	return '零一二三四五六七八九'[num];
}

function numToZenkaku(num) {
	return '０１２３４５６７８９'[num];
}

function secondToMinute(time) {
	const second = time % 60;
	const minute = Math.floor(time / 60);

	return { second, minute }
}