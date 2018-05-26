$(document).ready(function(){
	$('.column').click(function(){
		$(this).siblings().removeClass('choosen-img');
		$(this).addClass('choosen-img');
		$('#expandedImg').attr('src', $(this).children().attr('src'));
		$('#expandedImg').parent().css('display', 'block');
	});
});