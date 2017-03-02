<?php
$url = $_GET['url'];
if(empty($url)) {
	exit();
}

if(preg_match("^https?:\/\/", $url) === 1) {
	http_response_code(400);
	exit();
}

$cp = curl_init();
curl_setopt($cp, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($cp, CURLOPT_URL, $url);
curl_setopt($cp, CURLOPT_TIMEOUT, 30);
$data = curl_exec($cp);
curl_close($cp);

echo mb_convert_encoding($data, "UTF-8", "UTF-8");