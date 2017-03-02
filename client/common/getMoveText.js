import Localize from './Localize.js';

const kanjiNumber = Localize.t('kanji_number');
const pieceKanjiMap = Localize.getPieceKanjiMap();

function isPromoted(ptype) {
	switch(ptype) {
	case "TO":
	case "NY":
	case "NK":
	case "NG":
	case "UM":
	case "RY":
		return true;
	}
	return false;
}

function unpromote(ptype) {
	switch(ptype) {
	case "TO":
		return "FU";
	case "NY":
		return "KY";
	case "NK":
		return "KE";
	case "NG":
		return "GI";
	case "UM":
		return "KA";
	case "RY":
		return "HI";
	}
	return ptype;
}

function getMoveText(n, moves) {
	var move = moves[n];
	var prev = moves[n - 1];
	var text = (n + 1) + " ";
	var num_str = "";
	var piece_str = "";
	var bef_str = "";

	text += (move.charAt(0) == "+") ? "▲" : "△";
	var place = move.charAt(3); //ex. 3
	place += kanjiNumber[move.charAt(4)]; //ex. 三
	if(prev && (move.substr(3,2) == prev.substr(3,2)) ) {
		num_str = Localize.pieceSamePlace(place);
	}else{
		num_str = place;
	}

	var ptype = move.substr(5,2);
	if(isPromoted(ptype)) {
		var origin;

		for(var i = n - 2; i > 0; i -= 2) {
			var old = moves[i];
			if(old.substr(3,2) == move.substr(1,2)) {
				origin = old.substr(5,2);
				break;
			}
		}

		if(ptype != origin) { // become promoted
			var unpromoted = unpromote(ptype);
			piece_str = pieceKanjiMap[unpromoted];
			piece_str += Localize.t("nari");
		}else {
			piece_str = pieceKanjiMap[ptype];
		}
	}else {
		piece_str = pieceKanjiMap[ptype];
	}
	
	// 補足情報
	if(move.substr(1, 2) == "00") {
		bef_str += Localize.t("uti");
	}else {
		bef_str += "(" + move.substr(1, 2) + ")";
	}

	if(Localize.getLocale() == "ja"){
		text += num_str + piece_str + bef_str;
	}else{
		if(move.substr(1, 2) == "00") {
			text += piece_str + bef_str + num_str;	
		}else{
			text += piece_str + num_str + bef_str;
		}
	}
	
	return text;
}

export default getMoveText;