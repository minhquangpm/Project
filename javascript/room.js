$(document).ready(function(){
	// AOS.init();
	$('.top-menu').click(function(){
		$('.expand-menu').toggle();
	});

    $('.show-all').click(function(){
        var this_class = $(this).attr('class').split(' ')[0];
        $('.row').children().css('display', 'block');
        $('.' + this_class).siblings().removeClass('choosen-menu');
    });



    var brand_do_the_magic = function() {
        var this_class = $(this).attr('class').split(' ')[0];
        // console.log(this_class);
        var product = $(this).attr('class').split(' ')[0].split('-')[1];
        // console.log(product);
        if($('.row').children(':hidden').length === 0 && !$('.' + this_class).hasClass('choosen-menu')) {
            $('.' + this_class).addClass('choosen-menu');
            $('[data-product]').parent('.col-12').css('display', 'none');
            $('[data-product=' + product + ']').parent('.col-12').css('display', 'block');
        } else if ($('[data-product=' + product + ']').parent('.col-12').is(':hidden')) {
            $('.' + this_class).addClass('choosen-menu');
            $('[data-product=' + product + ']').parent('.col-12').css('display', 'block');
        } else {
            $('.' + this_class).removeClass('choosen-menu');
            $('[data-product=' + product + ']').parent('.col-12').css('display', 'none');
        }
        if ($('.row').children(':visible').length === 7) { //don't fucking know why always 7 elements visible
            $('.row').children().css('display', 'block');
        }
    }

    $('.show-sofa').click(brand_do_the_magic);
    $('.show-table').click(brand_do_the_magic);
    $('.show-cabinet').click(brand_do_the_magic);
    $('.show-chair').click(brand_do_the_magic);
});