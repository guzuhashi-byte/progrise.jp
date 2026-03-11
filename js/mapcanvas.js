// JavaScript Document
/* 地図の初期化 */
function initialize() {
	/* 緯度・経度：日本*/
	var latlng=new google.maps.LatLng(35.679144,139.772858);
	/* 地図のオプション設定 */
	var myOptions = {
		/*初期のズーム レベル */
		zoom: 15,
		/* 地図の中心点 */
		center: latlng,
		/* 地図タイプ */
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		/* 左上の丸いコントローラー表示 */
		panControl: false,
		/* 左のpegman（黄色い人形）表示 */
		streetViewControl: false,
		/* 左の上下スライダー表示 */
		zoomControl: false,
		/* 右上の「地図/航空写真」表示 */		
		mapTypeControl: false,
		/* 右下の定規の表示 */
		scaleControl: false,
		/* マウスホイールコントロール */
		scrollwheel: true,
		/* 右下の概観マップの表示 */
		overviewMapControl: false,
		/* 全コントローラーを非表示 */
		//disableDefaultUI: true
	};
	/* 地図オブジェクト */
	var map=new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	/* ★マーカーオブジェクト */
	var marker = new google.maps.Marker({
		position: latlng, /* マーカーを立てる場所の緯度・経度 */
		map: map, /*マーカーを配置する地図オブジェクト */
		title: '株式会社プログライズ　プログライズ総合会計事務所'
	});
}
/* ロード時に初期化 */
google.maps.event.addDomListener(window, 'load', initialize);
