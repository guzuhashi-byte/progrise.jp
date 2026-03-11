var smooth = {
	target : function(){
		var linkTag = document.getElementsByTagName('a');
		var serchTarget,
			targetTag,
			clickTarget,
			str = [],
			strName = [];
			
		for (var i = 0; i < linkTag.length; i++) {
			serchTarget = linkTag[i].getAttribute('href');
			str[i] = String(serchTarget);
			
			clickTarget = linkTag[i].getAttribute('name');
			strName[i] = String(clickTarget);
			console.log(strName[i]);

			if (str[i].indexOf('#') != -1) {
				targetTag = str[i].split('#')[1];
				
				if(targetTag != '') {
					smooth.addEvent(linkTag[i] , 'click' , function(){smooth.pageScroll(linkTag)});
				}
			}
		}
		
	},
	
	pageScroll : function(tagName){
		
	},
		
	addEvent : function(elm , evType , func){
		if (navigator.appName.indexOf('Microsoft') != -1) {
			elm.attachEvent('on' + evType , func);
		} else {
			elm.addEventListener(evType , func , false);
		}
	}
	
}

smooth.addEvent(window , 'load' , smooth.target);
