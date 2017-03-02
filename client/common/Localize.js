function Localize()
{
}
Localize.locale = "ja";
Localize.imgURL = "";

Localize.values = {
	"ja": {
		"start_pos": "開始局面",
		"kanji_number": ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
		"day": "日",
		"hour": "時間",
		"minute": "分",
		"second": "秒",
		"uti": "打", 
		"nari": "成" ,
		"dou": "同",
		"joseki": "定跡",
		"win": "勝ち",
		"lose": "負け",
		"evenly": "互角",
		"winning": "勝勢",
		"more_better": "大優勢",
		"better": "優勢",
		"worse": "劣勢",
		"terrible_worse": "大劣勢",
		"losing": "敗勢",
		"watching": "人観戦中",
		"not_take_my": "味方の駒は取れません",
		"chat": "チャット",
		"cmt_chat_limit": "40字以内で入力してください。"
	},
	"en": {
		"start_pos": "Start position",
		"kanji_number": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
		"day": "(d)",
		"hour": ":",
		"minute": ":",
		"second": "",
		"uti": "'", 
		"nari": "+" ,
		"dou": "",
		"joseki": "joseki",
		"win": "win",
		"lose": "lose",
		"evenly": "evenly",
		"winning": "winning",
		"more_better": "more better",
		"better": "better",
		"worse": "worse",
		"terrible_worse": "terrible worse",
		"losing": "losing",
		"watching": "people watching",
		"not_take_my": "Piece of ally does not take",
		"chat": "chat",
		"cmt_chat_limit": "Please input in less than 40 characters."
	}
};
Localize.getLocale = function()
{
	return Localize.locale;
};
Localize.setLocale = function(lcl)
{
	Localize.locale = lcl;
};

Localize.t = function(key)
{
	return Localize.values[Localize.locale][key];
};

Localize.pieceSamePlace = function(place){
	if(Localize.locale == "ja"){
		return Localize.t("dou");
	}else{
		return place;
	}       
};

Localize.changeKeisei = function(keisei){
	var keiseis = ["勝勢", "大優勢", "優勢", "互角", "劣勢", "大劣勢", "敗勢"];
	var lcl_keiseis = [Localize.t("winning"), Localize.t("more_better"), Localize.t("better"), 
	Localize.t("evenly"), Localize.t("worse"), Localize.t("terrible_worse"), Localize.t("losing")];
	
	var idx = keiseis.indexOf(keisei);
	if(idx != -1) {
		return lcl_keiseis[idx];
	}else{
		return keisei;
	}
};

Localize.getImgURL = function(img)
{
	var dir = Localize.imgURL + "/kif/";        
	if(Localize.locale == "ja"){
		return dir + img;
	}else{
		return dir + Localize.locale + "/" + img;
	}
};

Localize.setImgURL = function(url)
{
	Localize.imgURL = url;
};

Localize.getPieceKanjiMap = function()
{
	var pieceKanjiMap = new Array();
	switch(Localize.locale){
		case "en":
			pieceKanjiMap['FU'] = "P";
			pieceKanjiMap['KY'] = "L";
			pieceKanjiMap['KE'] = "N";
			pieceKanjiMap['GI'] = "S";
			pieceKanjiMap['KI'] = "G";
			pieceKanjiMap['KA'] = "B";
			pieceKanjiMap['HI'] = "R";
			pieceKanjiMap['OU'] = "K";
			pieceKanjiMap['TO'] = "+P";
			pieceKanjiMap['NY'] = "+L";
			pieceKanjiMap['NK'] = "+N";
			pieceKanjiMap['NG'] = "+S";
			pieceKanjiMap['UM'] = "+B";
			pieceKanjiMap['RY'] = "+R";
			break;
		default:
			pieceKanjiMap['FU'] = "歩";
			pieceKanjiMap['KY'] = "香";
			pieceKanjiMap['KE'] = "桂";
			pieceKanjiMap['GI'] = "銀";
			pieceKanjiMap['KI'] = "金";
			pieceKanjiMap['KA'] = "角";
			pieceKanjiMap['HI'] = "飛";
			pieceKanjiMap['OU'] = "玉";
			pieceKanjiMap['TO'] = "と";
			pieceKanjiMap['NY'] = "成香";
			pieceKanjiMap['NK'] = "成桂";
			pieceKanjiMap['NG'] = "成銀";
			pieceKanjiMap['UM'] = "馬";
			pieceKanjiMap['RY'] = "竜";
			break;
	}
	return pieceKanjiMap;   
};
Localize.getFinishMap = function()
{
	var finishMap = new Array();
	switch(Localize.locale){
		case "en":
			finishMap["SENTE_WIN_TORYO"]         = "Sente Win";
			finishMap["SENTE_WIN_CHECKMATE"]     = "Sente Checkmate Win";
			finishMap["SENTE_WIN_TRY"]           = "Sente Try Win";
			finishMap["SENTE_WIN_TIMEOUT"]       = "Gote Timeout Loss";
			finishMap["SENTE_WIN_DISCONNECT"]    = "Gote Connection Loss";
			finishMap["SENTE_WIN_OUTE_SENNICHI"] = "Gote Illegality Loss";
			finishMap["SENTE_WIN_ENTERINGKING"]  = "Sente Entering Win";

			finishMap["GOTE_WIN_TORYO"]          = "Gote Win";
			finishMap["GOTE_WIN_CHECKMATE"]      = "Gote Checkmate Win";
			finishMap["GOTE_WIN_TRY"]            = "Gote Try Win";
			finishMap["GOTE_WIN_TIMEOUT"]        = "Sente Timeout Loss";
			finishMap["GOTE_WIN_DISCONNECT"]     = "Sente Connection Loss";
			finishMap["GOTE_WIN_OUTE_SENNICHI"]  = "Sente Illegality Loss";
			finishMap["GOTE_WIN_ENTERINGKING"]   = "Gote Entering Win";

			finishMap["DRAW_SENNICHI"]           = "Draw Repetition";
			finishMap["DRAW_PLY_LIMIT"]          = "Draw";
			break;
		default:
			finishMap["SENTE_WIN_TORYO"]         = "まで先手の勝ち";
			finishMap["SENTE_WIN_CHECKMATE"]     = "まで先手の勝ち";
			finishMap["SENTE_WIN_TRY"]           = "まで先手のトライ勝ち";
			finishMap["SENTE_WIN_TIMEOUT"]       = "後手時間切れ";
			finishMap["SENTE_WIN_DISCONNECT"]    = "後手接続切れ";
			finishMap["SENTE_WIN_OUTE_SENNICHI"] = "後手反則負け";
			finishMap["SENTE_WIN_ENTERINGKING"]  = "まで先手の入玉勝ち";

			finishMap["GOTE_WIN_TORYO"]          = "まで後手の勝ち";
			finishMap["GOTE_WIN_CHECKMATE"]      = "まで後手の勝ち";
			finishMap["GOTE_WIN_TRY"]            = "まで後手のトライ勝ち";
			finishMap["GOTE_WIN_TIMEOUT"]        = "先手時間切れ";
			finishMap["GOTE_WIN_DISCONNECT"]     = "先手接続切れ";
			finishMap["GOTE_WIN_OUTE_SENNICHI"]  = "先手反則負け";
			finishMap["GOTE_WIN_ENTERINGKING"]   = "まで後手の入玉勝ち";

			finishMap["DRAW_SENNICHI"]           = "まで千日手成立";
			finishMap["DRAW_PLY_LIMIT"]          = "まで引き分け";
			break;
	}
	return finishMap;       
};

export default Localize;