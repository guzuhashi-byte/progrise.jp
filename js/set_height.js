/**
 * 要素の高さを揃える
 * set_height.js
 * Copyright (c) 2015 WEB-fact
 * https://ykt-com.net/
 */

var setBox = {
	
	checkHeight : function(){
		var checkList = [];
		var listParent = document.getElementById('service_info');
		var checkElm = listParent.children;
		// 要素の高さを取得する
		for (var i = 0; i < checkElm.length; i++) {
			checkList[i] = checkElm[i].offsetHeight;
		}
		// 取得した要素の最大値を求める
		var maxHeight = Math.max.apply(null , checkList);
		// 最大値を全要素に適用する
		for (var j = 0; j < checkElm.length; j ++) {
			checkElm[j].style.height = maxHeight + 'px';
		}
		
	},
	
	// イベント発生ロジック
	addEvent : function(elm , evType , func){
		if (navigator.appName.indexOf('Microsoft') != -1) {
			elm.attachEvent('on' + evType , func);
		} else {
			elm.addEventListener(evType , func , false);
		}
	}

}

setBox.addEvent(window , 'load' , setBox.checkHeight);