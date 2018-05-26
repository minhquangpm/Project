$(document).ready(function(){
// AOS.init();
	$('.top-menu').click(function(){
		$('.expand-menu').toggle();
	});

    $('.ml-all').click(function(){
        var this_class = $(this).attr('class').split(' ')[0];
        $('.row').children().css('display', 'block');
        $('.' + this_class).siblings().find('.ml-hide li').removeClass('choosen-menu');
    });
    /* work around menu sort items in brand page*/
    var menu_do_the_magic = function() {
        var class_ml_toggle = $(this).attr('class');
        if ($(this).siblings('.ml-hide').is(':hidden')) {
            $('.' + class_ml_toggle).siblings('.ml-hide').show();
            $('.expand-menu').show();
        } else {    
            $('.' + class_ml_toggle).siblings('.ml-hide').hide();
        }
        
    };

    var brand_do_the_magic = function(event) {
        var this_class = $(this).attr('class').split(' ')[0];
        // console.log(this_class);
        var product = event.data.product;
        var brand = event.data.brand;
        if($('.row').children(':hidden').length === 0 && !$('.' + this_class).hasClass('choosen-menu')) {
            $('.' + this_class).addClass('choosen-menu');
            $('[data-product][data-brand]').parent('.col-12').css('display', 'none');
            $('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').css('display', 'block');
        } else if ($('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').is(':hidden')) {
            $('.' + this_class).addClass('choosen-menu');
            $('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').css('display', 'block');
        } else {
            $('.' + this_class).removeClass('choosen-menu');
            $('[data-product=' + product + '][data-brand=' + brand + ']').parent('.col-12').css('display', 'none');
        }
        if ($('.row').children(':visible').length === 7) {
            $('.row').children().css('display', 'block');
        }
    }

    $('.ml-toggle1').click(menu_do_the_magic);
    $('.ml-toggle2').click(menu_do_the_magic);
    $('.ml-toggle3').click(menu_do_the_magic);

    $('.show-mersofa').click({product: 'sofa', brand: 'mercury'}, brand_do_the_magic);
    $('.show-merbed').click({product: 'bed', brand: 'mercury'}, brand_do_the_magic);
    $('.show-mertable').click({product: 'table', brand: 'mercury'}, brand_do_the_magic);
    $('.show-merchair').click({product: 'chair', brand: 'mercury'}, brand_do_the_magic);
    $('.show-jusofa').click({product: 'sofa', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-jubed').click({product: 'bed', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-jutable').click({product: 'table', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-juchair').click({product: 'chair', brand: 'jupiter'}, brand_do_the_magic);
    $('.show-masofa').click({product: 'sofa', brand: 'mars'}, brand_do_the_magic);
    $('.show-mabed').click({product: 'bed', brand: 'mars'}, brand_do_the_magic);
    $('.show-matable').click({product: 'table', brand: 'mars'}, brand_do_the_magic);
    $('.show-machair').click({product: 'chair', brand: 'mars'}, brand_do_the_magic);
});