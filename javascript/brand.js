$(function() {
	AOS.init();
	// var fixMenuLeft = $(".menu-left").offset().top;
	// // var fixNavBar = $(".nav-bar").offset().top;
	// var stickyLeftMenu = function() {
	// 	var scrollTop = $(window).scrollTop();
	// 	if (scrollTop + 60 > fixMenuLeft) {
	// 		$(".menu-left").addClass("fix-menu-left");
	// 	} else {
	// 		$(".menu-left").removeClass("fix-menu-left");
	// 	}
	// };
	// $(window).scroll(function() {
 //            stickyLeftMenu();
 //    });
	$('.top-menu').click(function(){
		$('.expand-menu').toggle();
	});
});