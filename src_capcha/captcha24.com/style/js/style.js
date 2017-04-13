$(document).ready(function(){

	var bg_all_width = $('.bg_fon').width();
	
	var bg_pic_width = 1616;
	
	if (bg_all_width <= 1024)
	{
		$('.bg_fon').css('width', 1024+'px');
		bg_all_width = 1024;
	}
	
	
	if (bg_pic_width != bg_all_width)
	{
		var pos_left = (bg_all_width - bg_pic_width) / 2;
		
		$('.bg_fon').css('background-position', pos_left+'px 0px');
	}	
	
});

$(window).resize(function(){
	$('.bg_fon').css('width', '');
	
	var bg_all_width = $('.bg_fon').width();
	
	var bg_pic_width = 1616;
	
	if (bg_all_width <= 1024)
	{
		$('.bg_fon').css('width', 1024+'px');
		bg_all_width = 1024;
	}
	
	
	if (bg_pic_width != bg_all_width)
	{
		var pos_left = (bg_all_width - bg_pic_width) / 2;
		$('.bg_fon').css('background-position', pos_left+'px 0px');
	}
});