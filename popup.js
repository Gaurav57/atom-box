$.fn.popupModal = function(p,o={}){
	/*init: function(){
		$('.'+p).show();
	};
	setting: function(){
		alert('Here are settingsss');
	},
	this.init;*/
};
$(document).ready(function() {
	$('#openModal').click(function() {
		$('.dumbBoxWrap').show();
	});         //Hide modal box         
	$('#closeModal').click(function() {
		$('.dumbBoxWrap').hide();
	}); 
}); 
