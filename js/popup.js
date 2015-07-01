(function($) {
	var setting ={
		headerColor: '#F08080',
	};
	var popObj = '';
	$.fn.popupModal = function(p,o){
		popObj = $('#'+p);
		$(this).popupSetting(o);
		popObj.show();
	};
	$.fn.popupSetting = function(o){
		console.log(setting.headerColor);
		if(popObj != 'undefined')
			popObj.find('div:eq(1)').find('div:eq(0)').css('background-color', setting.headerColor);
	};
})(jQuery);
